import {createCanvas, loadImage} from "canvas";
import * as fs from "node:fs";
import axios from "axios";
import {chains, chainStatusInfo, ChainStatus} from "../src";
import {version} from '../package.json';

async function main() {
  console.log('== Draw chains ==')

  // save to
  const filename = './chains.png';

  // Dimensions for the image
  const width = 1200;
  const height = 800;

  // Chain blocks positioning
  const chainBlockSize = 86
  const chainBlockPadding = 20
  const xPadding = 76

  // check tmp dir
  const tmpDir = './temp';
  if (!fs.existsSync(tmpDir)){
    fs.mkdirSync(tmpDir);
  }

  // download chain images
  console.log(`Download ${Object.keys(chains).length} chain images..`)
  for (const chainId in chains) {
    const chain = chains[chainId]
    const p = `${tmpDir}/${chain.img}`
    if (!fs.existsSync(p)) {
      await downloadFile(
        `https://raw.githubusercontent.com/stabilitydao/.github/main/chains/${chain.img}`,
        p
      )
    }

    process.stdout.write('.')
  }
  console.log()

  // Instantiate the canvas object
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d");

  // bg
  const bgColor = '#15003b'
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, width, height);

  // title
  ctx.font = '30px "Sans"'
  ctx.fillStyle = "#ffffff";
  ctx.fillText('Blockchain coverage', 460, 60)

  // library
  ctx.font = '20px "Sans"'
  ctx.fillStyle = "#ffffff";
  ctx.fillText(`📦 Stability Integration Library v${version}`,   90, 770)

  // statuses
  let i = 0
  let k = 100
  const paddingLeft = 190
  const statusBlockWidth = 300
  for (const chainStatus of Object.keys(chainStatusInfo)) {
    ctx.fillStyle = chainStatusInfo[chainStatus as ChainStatus].bgColor;
    ctx.fillRect(paddingLeft + i * statusBlockWidth, k, 24, 24);
    ctx.font = '18px "Arial"'
    ctx.fillStyle = chainStatusInfo[chainStatus as ChainStatus].color;
    ctx.fillText(chainStatusInfo[chainStatus as ChainStatus].title, paddingLeft +   i * statusBlockWidth + 30, k + 18)

    i++
    if (i > 2) {
      i = 0
      k += 40
    }
  }

  // put chain imgs
  let x = xPadding
  let y = 200
  const w = chainBlockSize - 2 * chainBlockPadding;
  const chainBlockStatusPadding = 6
  for (const chainId in chains) {
    const chain = chains[chainId]
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
        chainBlockSize - chainBlockStatusPadding * 2
      );

      // image
      const image = await loadImage(`${tmpDir}/${chain.img}`)
      ctx.drawImage(
        image,
        x + chainBlockPadding,
        y + chainBlockPadding,
        w,
        w
      );

      x += chainBlockSize

      // next line
      if (x > width - xPadding * 2) {
        x = xPadding
        y += chainBlockSize
      }
    } catch(e: Error|any) {
      console.log(`Error while processing ${chains[chainId].img}`)
    }
  }

  // Write the image to file
  const buffer = canvas.toBuffer("image/png");
  fs.writeFileSync(filename, buffer);
  console.log(`Image of chains collection generated and saved to ${filename}`)
}

async function downloadFile(url:string, filepath:string) {
  try {
    const response = await axios({
      url,
      method: 'GET',
      responseType: 'stream'
    });
    return new Promise((resolve, reject) => {
      response.data.pipe(fs.createWriteStream(filepath))
        .on('error', reject)
        .once('close', () => resolve(filepath));
    });
  } catch {
    console.error(`Download ${url} failed`)
  }
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
