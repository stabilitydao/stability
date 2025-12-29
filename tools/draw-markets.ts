import { createCanvas, loadImage } from "canvas";
import fs from "fs/promises";
import path from "path";
import { MarketData } from "../src/api.types";
import { ILendingMarket, lendingMarkets } from "../src/lending";
import tokenlist from "../src/stability.tokenlist.json";

const marketsDir = "./temp/markets";
const WIDTH = 768;
const HEIGHT = 768;

async function drawMarket(market: ILendingMarket) {
  const canvas = createCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext("2d");

  // Background
  const gradient = ctx.createLinearGradient(0, 0, 0, HEIGHT);
  gradient.addColorStop(0, "#000");
  gradient.addColorStop(1, "#1b1b1b");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // Title
  ctx.font = "bold 60px 'Sans-serif'";
  ctx.fillStyle = "white";
  ctx.textAlign = "left";
  ctx.fillText(market.id, 60, 135);

  // Subtitle
  ctx.font = "26px 'Sans-serif'";
  ctx.fillStyle = "#ccc";
  ctx.fillText(market.engine.replace(/_/g, " "), 60, 170);

  // Date pill
  const pillW = 170;
  const pillH = 46;
  const pillX = WIDTH - pillW - 60;
  const pillY = 22;
  ctx.beginPath();
  ctx.roundRect(pillX, pillY, pillW, pillH, 23);
  ctx.fillStyle = "#fff";
  ctx.fill();
  ctx.font = "bold 22px 'Sans-serif'";
  ctx.fillStyle = "#000";
  ctx.textAlign = "center";
  ctx.fillText(market.deployed, pillX + pillW / 2, pillY + 30);

  // Tokens
  const tokens = market.reserves;
  const total = tokens.length;
  const { tokenSize, spacingX, spacingY, maxPerRow } = getTokenLayout(total);

  const fontSize = getFontSize(tokenSize, total);
  const labelOffset = tokenSize * 0.9;

  const rows = Math.ceil(total / maxPerRow);
  const startY = HEIGHT / 2 - ((rows - 1) * spacingY) / 2 + 28;

  for (let i = 0; i < total; i++) {
    const r = tokens[i];
    const token = getTokenInfo(r.asset);

    const row = Math.floor(i / maxPerRow);
    const col = i % maxPerRow;
    const rowCount = Math.min(total - row * maxPerRow, maxPerRow);

    const startX = WIDTH / 2 - ((rowCount - 1) * spacingX) / 2;

    const x = startX + col * spacingX;
    const y = startY + row * spacingY;

    let logo: any = null;
    if (token?.logoURI) {
      try {
        logo = await loadImage(token.logoURI);
      } catch {}
    }

    // Icon
    ctx.save();
    ctx.beginPath();
    ctx.arc(x, y, tokenSize / 2, 0, Math.PI * 2);
    ctx.shadowColor = "rgba(0,0,0,0.5)";
    ctx.shadowBlur = Math.max(3, tokenSize * 0.12);
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

    // Border
    ctx.beginPath();
    ctx.arc(x, y, tokenSize / 2 + 1.5, 0, Math.PI * 2);
    ctx.lineWidth = Math.max(1.2, tokenSize * 0.035);
    ctx.strokeStyle = "white";
    ctx.stroke();

    // Label
    const rawSymbol = token?.symbol || r.aTokenSymbol;
    const label = formatSymbol(rawSymbol);

    ctx.font = `bold ${fontSize}px 'Sans-serif'`;
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText(label, x, y + labelOffset);
  }

  // Footer
  try {
    const stabilityLogo = await loadImage(path.resolve("./temp/Stability.svg"));
    const logoSize = 52;
    const groupWidth = logoSize + 16 + 150;
    const groupX = WIDTH / 2 - groupWidth / 2;
    const logoY = HEIGHT - 88;

    ctx.drawImage(stabilityLogo, groupX, logoY, logoSize, logoSize);

    ctx.font = "bold 30px 'Sans-serif'";
    ctx.fillStyle = "white";
    ctx.textAlign = "left";
    ctx.fillText("Stability", groupX + logoSize + 16, logoY + logoSize - 12);
  } catch {}

  // Save
  await ensureDir(marketsDir);
  const outPath = path.join(
    marketsDir,
    `${market.id.replace(/\s+/g, "_")}.png`,
  );
  await fs.writeFile(outPath, canvas.toBuffer("image/png"));
  console.log(`✅ Rendered ${market.id}`);
}

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

function getTokenLayout(total: number) {
  if (total <= 4) {
    return { tokenSize: 140, spacingX: 180, spacingY: 220, maxPerRow: 4 };
  }

  if (total <= 8) {
    return { tokenSize: 120, spacingX: 160, spacingY: 200, maxPerRow: 4 };
  }

  if (total <= 12) {
    return { tokenSize: 100, spacingX: 140, spacingY: 180, maxPerRow: 4 };
  }

  if (total <= 16) {
    return { tokenSize: 90, spacingX: 120, spacingY: 160, maxPerRow: 4 };
  }

  if (total <= 24) {
    return { tokenSize: 72, spacingX: 104, spacingY: 140, maxPerRow: 6 };
  }

  if (total <= 36) {
    return { tokenSize: 60, spacingX: 92, spacingY: 120, maxPerRow: 7 };
  }
  // 40–55 assets (ultra-dense)
  return { tokenSize: 28, spacingX: 56, spacingY: 80, maxPerRow: 12 };
}

function getFontSize(tokenSize: number, total: number) {
  const base = tokenSize * 0.28;

  // density dampening
  const densityFactor =
    total <= 12
      ? 1
      : total <= 24
        ? 0.95
        : total <= 36
          ? 0.9
          : total <= 50
            ? 0.85
            : 0.8;

  return Math.max(10, Math.round(base * densityFactor));
}

function formatSymbol(symbol: string) {
  if (symbol.length <= 5) return symbol;
  return symbol.slice(0, 3) + "…";
}

async function main() {
  await ensureDir(marketsDir);

  for (const market of lendingMarkets) {
    await drawMarket(market);
  }

  console.log("✅ All done!");
}

main().catch(console.error);
