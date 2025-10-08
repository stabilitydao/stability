import { createCanvas, loadImage } from "canvas";
import fs from "fs/promises";
import path from "path";
import { MarketData } from "../src/api.types";
import { ILendingMarket, lendingMarkets } from "../src/lending";
import tokenlist from "../src/stability.tokenlist.json";

const marketsDir = "./temp/markets";
const WIDTH = 1280;
const HEIGHT = 720;

async function ensureDir(dir: string) {
  try {
    await fs.mkdir(dir, { recursive: true });
  } catch {
    /* ignore */
  }
}

function getTokenInfo(asset: string) {
  const lower = asset.toLowerCase();
  return tokenlist.tokens.find((t) => t.address.toLowerCase() === lower);
}

async function drawMarket(
  market: ILendingMarket,
  marketData: MarketData[number][string],
) {
  const canvas = createCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext("2d");

  // Background gradient (deep violet)
  const gradient = ctx.createLinearGradient(0, 0, 0, HEIGHT);
  gradient.addColorStop(0, "#3b1e75");
  gradient.addColorStop(1, "#0e0c23");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // Title
  ctx.font = "bold 72px Sans-serif";
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.fillText(market.id, WIDTH / 2, 120);

  // Subtitle (engine)
  ctx.font = "32px Sans-serif";
  ctx.fillStyle = "#ddd";
  ctx.fillText(market.engine.replace(/_/g, " "), WIDTH / 2, 170);

  // Date pill (top-right)
  const pillW = 220;
  const pillH = 60;
  const pillX = WIDTH - pillW - 80;
  const pillY = 60;
  ctx.beginPath();
  ctx.roundRect(pillX, pillY, pillW, pillH, 30);
  ctx.fillStyle = "#fff";
  ctx.fill();
  ctx.font = "bold 26px Sans-serif";
  ctx.fillStyle = "#000";
  ctx.textAlign = "center";
  ctx.fillText(market.deployed, pillX + pillW / 2, pillY + 39);

  // Token row
  const tokenSize = 90;
  const spacing = 130;
  const startX = WIDTH / 2 - ((market.reserves.length - 1) * spacing) / 2;
  const iconY = 280;
  const labelY = iconY + 110;

  for (let i = 0; i < market.reserves.length; i++) {
    const r = market.reserves[i];
    const x = startX + i * spacing;
    const token = getTokenInfo(r.asset);

    // Circular token image
    let logo: any = null;
    if (token?.logoURI) {
      try {
        logo = await loadImage(token.logoURI);
      } catch {
        logo = null;
      }
    }

    ctx.save();
    ctx.beginPath();
    ctx.arc(x, iconY, tokenSize / 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();

    if (logo) {
      ctx.drawImage(
        logo,
        x - tokenSize / 2,
        iconY - tokenSize / 2,
        tokenSize,
        tokenSize,
      );
    } else {
      ctx.fillStyle = "#444";
      ctx.fillRect(
        x - tokenSize / 2,
        iconY - tokenSize / 2,
        tokenSize,
        tokenSize,
      );
    }
    ctx.restore();

    // Token label
    ctx.font = "bold 26px Sans-serif";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText(token?.symbol || r.aTokenSymbol, x, labelY);
  }

  // Get LTV + liquidationThreshold from marketData
  const ltvValues = market.reserves.map(
    (r) =>
      (marketData.reserves[r.asset.toLowerCase() as `0x${string}`]?.maxLtv ??
        0) + "%",
  );
  const liqValues = market.reserves.map(
    (r) =>
      (marketData.reserves[r.asset.toLowerCase() as `0x${string}`]
        ?.liquidationThreshold ?? 0) + "%",
  );

  // Function to draw value bars
  const barWidth = 960;
  const barHeight = 70;
  const barX = WIDTH / 2 - barWidth / 2;
  const firstBarY = 500;
  const secondBarY = 640;

  const drawBar = (label: string, y: number, values: string[]) => {
    // Label
    ctx.font = "bold 30px Sans-serif";
    ctx.fillStyle = "white";
    ctx.textAlign = "left";
    ctx.fillText(label, barX, y - 25);

    // Bar background
    ctx.beginPath();
    ctx.roundRect(barX, y, barWidth, barHeight, 35);
    ctx.fillStyle = "#3a2c6b";
    ctx.fill();

    // Values
    const sectionWidth = barWidth / values.length;
    ctx.font = "bold 26px Sans-serif";
    ctx.textAlign = "center";
    ctx.fillStyle = "white";

    values.forEach((v, i) => {
      const vx = barX + sectionWidth * i + sectionWidth / 2;
      ctx.fillText(v, vx, y + barHeight / 1.6);
    });
  };

  drawBar("Loan to Value", firstBarY, ltvValues);
  drawBar("Liquidation Threshold", secondBarY, liqValues);

  // Save to file
  await ensureDir(marketsDir);
  const outPath = path.join(
    marketsDir,
    `${market.id.replace(/\s+/g, "_")}.png`,
  );
  await fs.writeFile(outPath, canvas.toBuffer("image/png"));
  console.log(`✅ Rendered ${market.id}`);
}

async function main() {
  await ensureDir(marketsDir);

  let response;
  try {
    response = await fetch("https://api.stability.farm/", {
      headers: { Accept: "application/json" },
    });
  } catch {
    console.log("❌ Unable to fetch market info");
    return;
  }

  const data = await response.json();
  const marketsInfo = data.markets[146];

  for (const market of lendingMarkets) {
    await drawMarket(market, marketsInfo[market.id]);
  }

  console.log("✅ All done!");
}

main().catch(console.error);
