import { createCanvas, loadImage } from "canvas";
import fs from "fs/promises";
import path from "path";
import { Market, MarketData } from "../src/api.types";
import { ILendingMarket, lendingMarkets } from "../src/lending";
import tokenlist from "../src/stability.tokenlist.json";

const tmpDir = "./temp";
const marketsDir = "./temp/markets";
async function ensureDir(dir: string) {
  try {
    await fs.mkdir(dir, { recursive: true });
  } catch (e) {
    // ignore if exists
  }
}

function getTokenInfo(asset: string) {
  const lower = asset.toLowerCase();
  return tokenlist.tokens.find((t) => t.address.toLowerCase() === lower);
}

async function drawMarket(
  market: ILendingMarket,
  marketsInfo: MarketData[number][string],
) {
  const width = 800;
  const height = 200 + market.reserves.length * 80;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d");

  // Background
  ctx.fillStyle = "#10141a";
  ctx.fillRect(0, 0, width, height);

  // Title
  ctx.fillStyle = "white";
  ctx.font = "bold 36px Sans-serif";
  ctx.fillText(market.id, 40, 60);

  // Sub info
  ctx.font = "20px Sans-serif";
  ctx.fillStyle = "#ccc";
  ctx.fillText(`Engine: ${market.engine}`, 40, 100);
  ctx.fillText(`Deployed: ${market.deployed}`, 40, 130);

  // Headers
  ctx.font = "bold 20px Sans-serif";
  ctx.fillStyle = "#aaa";
  ctx.fillText("Asset", 40, 180);
  ctx.fillText("Symbol", 200, 180);
  ctx.fillText("LTV", 400, 180);
  ctx.fillText("Liquidation Threshold", 520, 180);

  let y = 220;
  for (const r of market.reserves) {
    const token = getTokenInfo(r.asset);
    let logo = null;

    if (token?.logoURI) {
      try {
        logo = await loadImage(token.logoURI);
      } catch {
        logo = null;
      }
    }

    // Draw icon
    if (logo) {
      ctx.drawImage(logo, 40, y - 35, 40, 40);
    } else {
      ctx.beginPath();
      ctx.arc(60, y - 15, 20, 0, Math.PI * 2);
      ctx.fillStyle = "#555";
      ctx.fill();
    }

    // Text columns
    ctx.fillStyle = "white";
    ctx.font = "18px Sans-serif";

    const ltv =
      marketsInfo.reserves[r.asset.toLowerCase() as `0x${string}`].maxLtv;
    const liquidationThreshold =
      marketsInfo.reserves[r.asset.toLowerCase() as `0x${string}`]
        .liquidationThreshold;

    ctx.fillText(token?.symbol || r.aTokenSymbol, 200, y);
    ctx.fillText(ltv, 400, y);
    ctx.fillText(liquidationThreshold, 600, y);

    y += 60;
  }

  const buffer = canvas.toBuffer("image/png");
  const filename = `${market.id.replace(/\s+/g, "_")}.png`;
  await fs.writeFile(path.join(marketsDir, filename), buffer);

  console.log(`✅ Generated image for ${market.id}`);
}

async function main() {
  await ensureDir(marketsDir);
  let response;
  try {
    response = await fetch("https://api.stability.farm/", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
  } catch (e) {
    console.log("Unable to get market info");
    return;
  }

  const marketsInfo = await response.json().then((res) => res.markets[146]);

  for (const market of lendingMarkets) {
    await drawMarket(market, marketsInfo[market.id]);
  }
  console.log("✅ All done!");
}

main().catch(console.error);
