import { createCanvas, loadImage } from "canvas";
import fs from "fs/promises";
import path from "path";
import { MarketData } from "../src/api.types";
import { ILendingMarket, lendingMarkets } from "../src/lending";
import tokenlist from "../src/stability.tokenlist.json";

const marketsDir = "./temp/markets";
const WIDTH = 768;
const HEIGHT = 768;

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

  // Background gradient (black → dark gray)
  const gradient = ctx.createLinearGradient(0, 0, 0, HEIGHT);
  gradient.addColorStop(0, "#000000");
  gradient.addColorStop(1, "#1b1b1b");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // Title (top-left)
  ctx.font = "bold 64px 'Sans-serif'";
  ctx.fillStyle = "white";
  ctx.textAlign = "left";
  ctx.fillText(market.id, 60, 120);

  // Subtitle
  ctx.font = "28px 'Sans-serif'";
  ctx.fillStyle = "#ccc";
  ctx.fillText(market.engine.replace(/_/g, " "), 60, 165);

  // Date pill (top-right)
  const pillW = 180;
  const pillH = 50;
  const pillX = WIDTH - pillW - 60;
  const pillY = 70;
  ctx.beginPath();
  ctx.roundRect(pillX, pillY, pillW, pillH, 25);
  ctx.fillStyle = "#fff";
  ctx.fill();
  ctx.font = "bold 24px 'Sans-serif'";
  ctx.fillStyle = "#000";
  ctx.textAlign = "center";
  ctx.fillText(market.deployed, pillX + pillW / 2, pillY + 33);

  // Token icons (centered layout)
  const tokens = market.reserves;
  const total = tokens.length;
  const tokenSize = 120;
  const spacingX = 160;
  const spacingY = 200;
  const maxPerRow = 4;
  const rows = Math.ceil(total / maxPerRow);
  const startY = HEIGHT / 2 - ((rows - 1) * spacingY) / 2;

  for (let i = 0; i < total; i++) {
    const r = tokens[i];
    const token = getTokenInfo(r.asset);
    const row = Math.floor(i / maxPerRow);
    const col = i % maxPerRow;
    const rowCount = Math.min(total - row * maxPerRow, maxPerRow);
    const startX = WIDTH / 2 - ((rowCount - 1) * spacingX) / 2;
    const x = startX + col * spacingX;
    const y = startY + row * spacingY;

    // Load token image
    let logo: any = null;
    if (token?.logoURI) {
      try {
        logo = await loadImage(token.logoURI);
      } catch {
        logo = null;
      }
    }

    // Shadow + circle clip
    ctx.save();
    ctx.beginPath();
    ctx.arc(x, y, tokenSize / 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.shadowColor = "rgba(0,0,0,0.6)";
    ctx.shadowBlur = 10;
    ctx.clip();

    if (logo) {
      ctx.drawImage(
        logo,
        x - tokenSize / 2,
        y - tokenSize / 2,
        tokenSize,
        tokenSize,
      );
    } else {
      ctx.fillStyle = "#444";
      ctx.fillRect(x - tokenSize / 2, y - tokenSize / 2, tokenSize, tokenSize);
    }
    ctx.restore();

    // White border
    ctx.beginPath();
    ctx.arc(x, y, tokenSize / 2 + 3, 0, Math.PI * 2);
    ctx.lineWidth = 5;
    ctx.strokeStyle = "white";
    ctx.stroke();

    // Symbol label
    ctx.font = "bold 26px 'Sans-serif'";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText(token?.symbol || r.aTokenSymbol, x, y + tokenSize / 2 + 40);
  }

  // Footer: Stability logo + centered group
  try {
    const stabilityLogo = await loadImage(path.resolve("./temp/Stability.svg"));
    const logoSize = 64;
    const groupWidth = 64 + 20 + 170; // logo + gap + text width
    const groupX = WIDTH / 2 - groupWidth / 2;
    const logoY = HEIGHT - 110;

    // Logo
    ctx.drawImage(stabilityLogo, groupX, logoY, logoSize, logoSize);

    // Text
    ctx.font = "bold 36px 'Sans-serif'";
    ctx.fillStyle = "white";
    ctx.textAlign = "left";
    ctx.fillText("Stability", groupX + logoSize + 20, logoY + logoSize - 15);
  } catch (e) {
    console.warn("⚠️ Could not load Stability logo:", e);
  }

  // Save output
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
