import { createCanvas, loadImage } from "canvas";
import * as fs from "node:fs";
import axios from "axios";
import { chains, chainStatusInfo, ChainStatus, getChainsTotals } from "../src";
import { version } from "../package.json";

async function main() {
  console.log("== Draw chains ==");

  // check tmp dirs
  const tmpDir = "./temp";
  const coversDir = "./temp/covers";
  if (!fs.existsSync(tmpDir)) {
    fs.mkdirSync(tmpDir);
  }
  if (!fs.existsSync(coversDir)) {
    fs.mkdirSync(coversDir);
  }

  // save to
  const filename = "./chains.png";

  // Dimensions for the image
  const width = 1200;
  const height = 800;

  // Chain blocks positioning
  const chainBlockSize = 80;
  const chainBlockPadding = 16;
  const xPadding = 76;

  // download chain images
  console.log(`Download ${Object.keys(chains).length} chain images..`);
  for (const chainId in chains) {
    const chain = chains[chainId];
    const p = `${tmpDir}/${chain.img}`;
    if (!fs.existsSync(p)) {
      await downloadFile(
        `https://raw.githubusercontent.com/stabilitydao/.github/main/chains/${chain.img}`,
        p,
      );
    }

    process.stdout.write(".");
  }
  console.log();

  // Instantiate the canvas object
  let canvas = createCanvas(width, height);
  let ctx = canvas.getContext("2d");

  // bg
  const bgColor = "#15003b";
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, width, height);

  // title
  ctx.font = '30px "Sans"';
  ctx.fillStyle = "#ffffff";
  ctx.fillText("⛓️ Blockchain coverage", 460, 60);

  // library
  ctx.font = '20px "Sans"';
  ctx.fillStyle = "#ffffff";
  ctx.fillText(`📦 Stability Integration Library v${version}`, 90, 770);

  // load chain totals
  const chainTotals = getChainsTotals();

  // statuses
  let i = 0;
  let k = 100;
  const paddingLeft = 190;
  const statusBlockWidth = 300;
  for (const chainStatus of Object.keys(chainStatusInfo)) {
    const csi = chainStatusInfo[chainStatus as ChainStatus];
    ctx.fillStyle = csi.bgColor;
    ctx.fillRect(paddingLeft + i * statusBlockWidth, k, 24, 24);
    ctx.font = '18px "Arial"';
    ctx.fillStyle = csi.color;
    ctx.fillText(
      `${csi.title} (${chainTotals[chainStatus as ChainStatus]})`,
      paddingLeft + i * statusBlockWidth + 30,
      k + 18,
    );

    i++;
    if (i > 2) {
      i = 0;
      k += 40;
    }
  }

  // put chain imgs
  let x = xPadding;
  let y = 200;
  const w = chainBlockSize - 2 * chainBlockPadding;
  const chainBlockStatusPadding = 6;
  for (const chainId in chains) {
    const chain = chains[chainId];
    try {
      // status
      ctx.fillStyle = chainStatusInfo[chain.status].bgColor;
      if (chain.status === ChainStatus.NOT_SUPPORTED) {
        ctx.fillStyle = bgColor;
      }
      ctx.fillRect(
        x + chainBlockStatusPadding,
        y + chainBlockStatusPadding,
        chainBlockSize - chainBlockStatusPadding * 2,
        chainBlockSize - chainBlockStatusPadding * 2,
      );

      // image
      const image = await loadImage(`${tmpDir}/${chain.img}`);
      ctx.drawImage(image, x + chainBlockPadding, y + chainBlockPadding, w, w);

      x += chainBlockSize;

      // next line
      if (x > width - xPadding * 2) {
        x = xPadding;
        y += chainBlockSize;
      }
    } catch (e: Error | any) {
      console.log(`Error while processing ${chains[chainId].img}`);
    }
  }

  // Write the image to file
  const buffer = canvas.toBuffer("image/png");
  fs.writeFileSync(filename, buffer);
  console.log(`Image of chains collection generated and saved to ${filename}`);

  // draw covers
  for (const chainId in chains) {
    const chain = chains[chainId];
    // Dimensions for the image
    const coverWidth = 1000;
    const coverHeight = 1000;

    // Instantiate the canvas object
    canvas = createCanvas(coverWidth, coverHeight);
    ctx = canvas.getContext("2d");

    // bg
    // const bgColor = '#15003b'
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, coverWidth, coverHeight);

    // chain name
    ctx.font = 'bold 90px "Sans"';
    ctx.fillStyle = "#ffffff";
    ctx.fillText(chain.name, 100, 830);
    ctx.font = '40px "Sans"';
    ctx.fillText(`Chain ID: ${chainId}`, 100, 900);

    // image
    const imgPath = `${tmpDir}/${chain.img}`;
    try {
      const image = await loadImage(imgPath);
      ctx.drawImage(image, 250, 170, 500, 500);
    } catch (e) {
      console.log(`Error while processing ${imgPath}`);
    }

    // Write the image to file
    const buffer = canvas.toBuffer("image/png");
    fs.writeFileSync(`${coversDir}/${chainId}.png`, buffer);
  }
  console.log(`Covers of chains generated and saved to ${coversDir}`);
}

async function downloadFile(url: string, filepath: string) {
  try {
    const response = await axios({
      url,
      method: "GET",
      responseType: "stream",
    });
    return new Promise((resolve, reject) => {
      response.data
        .pipe(fs.createWriteStream(filepath))
        .on("error", reject)
        .once("close", () => resolve(filepath));
    });
  } catch {
    console.error(`Download ${url} failed`);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
