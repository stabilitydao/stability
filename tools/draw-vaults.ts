import { createCanvas, loadImage } from "canvas";
import * as fs from "node:fs";
import { strategies, getStrategyProtocols } from "../src/strategies";
import tokenlist from "../src/stability.tokenlist.json";

async function main() {
  console.log("== Draw vaults ==");

  // check tmp dirs
  const tmpDir = "./temp";
  const imagesCacheDir = `${tmpDir}/cachedVaultsImages`;
  const coversDir = `${tmpDir}/covers`;
  if (!fs.existsSync(tmpDir)) {
    fs.mkdirSync(tmpDir);
  }
  if (!fs.existsSync(imagesCacheDir)) {
    fs.mkdirSync(imagesCacheDir);
  }
  if (!fs.existsSync(coversDir)) {
    fs.mkdirSync(coversDir);
  }

  // fetch stability.farm API
  let stabilityAPI;
  try {
    const response = await fetch("https://api.stability.farm/", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`Error trying to fetch: ${response.status}`);
    }
    stabilityAPI = await response.json();
  } catch (error) {
    console.error("Error while fetching Stability.farm API:", error);
    return;
  }

  // we assume that the vaults are in stabilityAPI.vaults
  // if it does not exist, show error and exit
  if (!stabilityAPI.vaults) {
    console.error(
      "Vaults not founded on Stability API",
      Object.keys(stabilityAPI),
    );
    return;
  }

  // calculate the total of vaults for the progress bar
  let totalVaults = 0;
  for (const chainId in stabilityAPI.vaults) {
    totalVaults += Object.keys(stabilityAPI.vaults[chainId]).length;
  }
  let processedVaults = 0;

  // iterate over the vaults
  for (const chainId in stabilityAPI.vaults) {
    const vaultsObj = stabilityAPI.vaults[chainId];
    for (const vaultAddress in vaultsObj) {
      const vault = vaultsObj[vaultAddress];
      const symbol = vault.symbol || "";
      const name = vault.name || "";
      const strategyShortId = vault.strategyShortId || "";
      const strategyId = vault.strategyId || "";
      const logoUrl =
        vault.logo ||
        `https://api.stability.farm/vault/${chainId}/${vaultAddress}/logo.svg`;
      const assetsLength = vault.assets.length;

      // dimensions for the image
      const coverWidth = 1024;
      const coverHeight = 1024;
      let canvas = createCanvas(coverWidth, coverHeight);
      let ctx = canvas.getContext("2d");

      // bg
      const bgColor = "#15003b";
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, coverWidth, coverHeight);

      // search for the color of the background and the text of the strategy
      let bgColorStrategy = "#222";
      let colorStrategy = "#ffffff";
      if (strategies[strategyShortId as keyof typeof strategies]) {
        bgColorStrategy =
          strategies[strategyShortId as keyof typeof strategies].bgColor ||
          "#222";
        colorStrategy =
          strategies[strategyShortId as keyof typeof strategies].color ||
          "#222";
      }

      // text-name
      const maxWidth = coverWidth * 0.7;
      let lines: string[] = [];
      ctx.fillStyle = "#612FFB";
      let fontSize = 50;
      const maxFontSize = 70;
      ctx.font = `${fontSize}px "Sans"`;
      if (ctx.measureText(name).width > maxWidth) {
        const words = name.split(" ");

        // search for the best split point to balance the length of the lines
        let bestDiff = Infinity;
        let bestSplit = 1;
        for (let i = 1; i < words.length; i++) {
          const line1 = words.slice(0, i).join(" ");
          const line2 = words.slice(i).join(" ");
          const diff = Math.abs(
            ctx.measureText(line1).width - ctx.measureText(line2).width,
          );
          if (diff < bestDiff) {
            bestDiff = diff;
            bestSplit = i;
          }
        }
        lines = [
          words.slice(0, bestSplit).join(" "),
          words.slice(bestSplit).join(" "),
        ];
      } else {
        lines = [name];
      }

      // adjust font size to not exceed 70% of the width
      let fits = false;
      let singleLine = lines.length === 1;
      while (!fits) {
        ctx.font = `${fontSize}px "Sans"`;
        const tooWide = lines.some(
          (line) => ctx.measureText(line).width > maxWidth,
        );
        if (tooWide) {
          fontSize -= 2;
        } else {
          fits = true;
        }
      }

      // if single line and text is much shorter than 70% of the width, increase the font size until a maximum
      if (singleLine) {
        while (
          fontSize < maxFontSize &&
          ctx.measureText(lines[0]).width < maxWidth * 0.7
        ) {
          fontSize += 2;
          ctx.font = `${fontSize}px "Sans"`;
        }
      }
      ctx.font = `${fontSize}px "Sans"`;
      const nameStartY = singleLine ? 115 : 100;
      const nameLineSpacing = singleLine ? 0 : 58;
      lines.forEach((line, i) => {
        const lineWidth = ctx.measureText(line).width;
        const xLine = (coverWidth - lineWidth) / 2;

        // if single line, center it between where two lines would be
        const y = singleLine
          ? nameStartY + 29
          : nameStartY + i * nameLineSpacing;
        ctx.fillText(line, xLine, y);
      });

      // image-logo
      try {
        const imageFileName =
          `${symbol || name}`.replace(/[^a-zA-Z0-9_-]/g, "_") + ".png";
        const localImagePath = `${imagesCacheDir}/${imageFileName}`;
        let imagePathToUse = localImagePath;
        if (!fs.existsSync(localImagePath)) {
          // download the image and save it locally
          const res = await fetch(logoUrl);
          if (res.ok) {
            const arrayBuffer = await res.arrayBuffer();
            fs.writeFileSync(localImagePath, Buffer.from(arrayBuffer));
          } else {
            imagePathToUse = logoUrl; // fallback to url
          }
        }
        const image = await loadImage(imagePathToUse);
        const imageWidth = 400;
        const imageHeight = 400;
        const x = (coverWidth - imageWidth) / 2;
        ctx.drawImage(image, x, 210, imageWidth, imageHeight);
      } catch (e) {
        console.warn(`Could not load logo for vault ${name} (${logoUrl})`);
      }

      // text-symbol
      let symbolFontSize = 70;
      ctx.font = `bold ${symbolFontSize}px "Sans"`;
      ctx.fillStyle = "#ffffff";
      const maxSymbolWidth = coverWidth * 0.7;
      while (
        ctx.measureText(symbol).width > maxSymbolWidth &&
        symbolFontSize > 20
      ) {
        symbolFontSize -= 2;
        ctx.font = `bold ${symbolFontSize}px "Sans"`;
      }
      const symbolWidth = ctx.measureText(symbol).width;
      const xSymbol = (coverWidth - symbolWidth) / 2;
      ctx.fillText(symbol, xSymbol, 700);

      // text-assets
      for (let i = 0; i < assetsLength; i++) {
        ctx.font = assetsLength > 1 ? '30px "Sans"' : '40px "Sans"';
        ctx.fillStyle = "#f4ebf5";
        const assetAddress = vault.assets[i];

        // search for the token in tokenlist
        const token = tokenlist.tokens.find(
          (t) => t.address.toLowerCase() === assetAddress.toLowerCase(),
        );
        const assetLogoUrl = token ? token.logoURI : "";
        const assetLogoLocalPath = `${imagesCacheDir}/${assetAddress}.png`;
        let assetLogoPathToUse = assetLogoLocalPath;
        if (assetLogoUrl && !fs.existsSync(assetLogoLocalPath)) {
          const res = await fetch(assetLogoUrl);
          if (res.ok) {
            const arrayBuffer = await res.arrayBuffer();
            fs.writeFileSync(assetLogoLocalPath, Buffer.from(arrayBuffer));
          } else {
            assetLogoPathToUse = assetLogoUrl; // fallback to url
          }
        }

        const assetName = token ? token.name : assetAddress;
        const assetTextWidth = ctx.measureText(assetName).width;
        const logoSize = assetsLength > 1 ? 35 : 47;
        let logoImg: any = null;
        try {
          if (assetLogoUrl) {
            logoImg = await loadImage(assetLogoPathToUse);
          }
        } catch (e) {
          logoImg = null;
        }

        // calculate X position for logo + text centered
        const totalWidth = (logoImg ? logoSize + 12 : 0) + assetTextWidth;
        const startX = (coverWidth - totalWidth) / 2;
        const y = assetsLength > 1 ? 750 + i * 50 : 785;

        // draw logo if exists
        if (logoImg) {
          ctx.save();
          ctx.beginPath();
          ctx.arc(
            startX + logoSize / 2,
            y - logoSize / 2 + 8,
            logoSize / 2,
            0,
            2 * Math.PI,
          );
          ctx.closePath();
          ctx.clip();
          ctx.drawImage(logoImg, startX, y - logoSize + 8, logoSize, logoSize);
          ctx.restore();
        }
        // draw asset name
        ctx.fillText(assetName, startX + (logoImg ? logoSize + 12 : 0), y);
      }

      // text-strategy (rounded rectangle and centered text)
      ctx.font = 'bold 30px "Sans"';
      const strategyWidth = ctx.measureText(strategyId).width;
      const rectWidth = strategyWidth + 48;
      const xStrategyRect = (coverWidth - rectWidth) / 2;
      const yStrategyRect = 835;
      const strategyRectHeight = 130;
      const strategyRectRadius = 18;

      // bg- strategy background rectangle
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(xStrategyRect + strategyRectRadius, yStrategyRect);
      ctx.lineTo(xStrategyRect + rectWidth - strategyRectRadius, yStrategyRect);
      ctx.quadraticCurveTo(
        xStrategyRect + rectWidth,
        yStrategyRect,
        xStrategyRect + rectWidth,
        yStrategyRect + strategyRectRadius,
      );
      ctx.lineTo(
        xStrategyRect + rectWidth,
        yStrategyRect + strategyRectHeight - strategyRectRadius,
      );
      ctx.quadraticCurveTo(
        xStrategyRect + rectWidth,
        yStrategyRect + strategyRectHeight,
        xStrategyRect + rectWidth - strategyRectRadius,
        yStrategyRect + strategyRectHeight,
      );
      ctx.lineTo(
        xStrategyRect + strategyRectRadius,
        yStrategyRect + strategyRectHeight,
      );
      ctx.quadraticCurveTo(
        xStrategyRect,
        yStrategyRect + strategyRectHeight,
        xStrategyRect,
        yStrategyRect + strategyRectHeight - strategyRectRadius,
      );
      ctx.lineTo(xStrategyRect, yStrategyRect + strategyRectRadius);
      ctx.quadraticCurveTo(
        xStrategyRect,
        yStrategyRect,
        xStrategyRect + strategyRectRadius,
        yStrategyRect,
      );
      ctx.closePath();
      ctx.fillStyle = bgColorStrategy;
      ctx.shadowColor = "#000";
      ctx.shadowBlur = 12;
      ctx.fill();
      ctx.restore();

      // text-strategy
      ctx.font = 'bold 30px "Sans"';
      ctx.fillStyle = colorStrategy;
      ctx.textBaseline = "middle";
      ctx.fillText(strategyId, (coverWidth - strategyWidth) / 2, 865);
      ctx.textBaseline = "alphabetic";

      // image-strategy images
      let protocolImgs: any[] = [];
      const protocols = getStrategyProtocols(strategyShortId);
      for (const proto of protocols) {
        if (proto.img) {
          const protoImgUrl = `https://raw.githubusercontent.com/stabilitydao/.github/main/assets/${proto.img}`;
          const protoImgLocalPath = `${imagesCacheDir}/${proto.img}`;
          let protoImgPathToUse = protoImgLocalPath;
          if (!fs.existsSync(protoImgLocalPath)) {
            const res = await fetch(protoImgUrl);
            if (res.ok) {
              const arrayBuffer = await res.arrayBuffer();
              fs.writeFileSync(protoImgLocalPath, Buffer.from(arrayBuffer));
            } else {
              protoImgPathToUse = protoImgUrl;
            }
          }
          try {
            const protoImg = await loadImage(protoImgPathToUse);
            protocolImgs.push(protoImg);
          } catch (e) {
            console.warn(
              `Could not load protocol image for ${proto.name} (${protoImgUrl})`,
            );
          }
        }
      }

      // draw protocol images centered below the name
      if (protocolImgs.length > 0) {
        const protoImgSize = 48;
        const totalWidth =
          protocolImgs.length * protoImgSize + (protocolImgs.length - 1) * 16;
        const startX = (coverWidth - totalWidth) / 2;
        const y = 900;
        for (let i = 0; i < protocolImgs.length; i++) {
          ctx.save();
          ctx.beginPath();
          ctx.arc(
            startX + i * (protoImgSize + 16) + protoImgSize / 2,
            y + protoImgSize / 2,
            protoImgSize / 2,
            0,
            2 * Math.PI,
          );
          ctx.closePath();
          ctx.clip();
          ctx.drawImage(
            protocolImgs[i],
            startX + i * (protoImgSize + 16),
            y,
            protoImgSize,
            protoImgSize,
          );
          ctx.restore();
        }
      }

      // write the image to file
      const buffer = canvas.toBuffer("image/png");
      fs.writeFileSync(
        `${coversDir}/${chainId}-${name.replace(/[^a-zA-Z0-9]/g, "_")}.png`,
        buffer,
      );
      processedVaults++;

      // progress bar
      const percent = Math.round((processedVaults / totalVaults) * 100);
      process.stdout.clearLine(0);
      process.stdout.cursorTo(0);
      process.stdout.write(
        `Progress: [${"=".repeat(percent / 2)}${" ".repeat(50 - percent / 2)}] ${percent}% (${processedVaults}/${totalVaults})`,
      );
    }
  }
  process.stdout.write("\n");

  console.log(`Vaults images cached on ${imagesCacheDir}`);
  console.log(`Covers of vaults generated and saved to ${coversDir}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
