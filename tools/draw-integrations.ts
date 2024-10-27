import { createCanvas, loadImage } from "canvas";
import * as fs from "node:fs";
import axios from "axios";
import { integrations } from "../src";
import { version } from "../package.json";
import {
  protocolStatusInfo,
  getIntegrationStatus,
  IntegrationStatus,
} from "../src/integrations";

async function main() {
  console.log("== Draw integrations ==");

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
  const filename = "./integrations.png";

  // Dimensions for the image
  const width = 1200;
  const height = 800;

  // Organization blocks positioning
  const organizationBlockSize = 86;
  const organizationBlockPadding = 20;
  const xPadding = 76;

  // download organization images
  console.log(
    `Download ${Object.keys(integrations).length} organization images..`,
  );
  for (const orgId in integrations) {
    const organization = integrations[orgId];
    const p = `${tmpDir}/${organization.img}`;
    if (!fs.existsSync(p)) {
      await downloadFile(
        `https://raw.githubusercontent.com/stabilitydao/.github/renzo-dev/assets/${organization.img}`,
        p,
      );
    }

    process.stdout.write(".");
  }

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
  ctx.fillText("Integrations", 460, 60);

  // library
  ctx.font = '20px "Sans"';
  ctx.fillStyle = "#ffffff";
  ctx.fillText(`📦 Stability Integration Library v${version}`, 90, 770);

  // statuses
  let i = 0;
  let k = 100;
  const paddingLeft = 190;
  const statusBlockWidth = 300;
  for (const protocolStatus of Object.keys(protocolStatusInfo)) {
    ctx.fillStyle =
      protocolStatusInfo[protocolStatus as IntegrationStatus].bgColor;
    ctx.fillRect(paddingLeft + i * statusBlockWidth, k, 24, 24);
    ctx.font = '18px "Arial"';
    ctx.fillStyle =
      protocolStatusInfo[protocolStatus as IntegrationStatus].color;
    ctx.fillText(
      protocolStatusInfo[protocolStatus as IntegrationStatus].title,
      paddingLeft + i * statusBlockWidth + 30,
      k + 18,
    );

    i++;
    if (i > 2) {
      i = 0;
      k += 40;
    }
  }

  // put organization imgs
  let x = xPadding;
  let y = 270;
  const w = organizationBlockSize - 2 * organizationBlockPadding;
  const organizationBlockStatusPadding = 6;

  for (const orgId in integrations) {
    const org = integrations[orgId];
    const protocolsStatus = [];
    let status;
    for (const protocolId in org.protocols) {
      const protocol = org.protocols[protocolId];
      const protocolStatus = getIntegrationStatus(protocol);
      protocolsStatus.push(protocolStatus);
    }

    const integrationStatusValues = [
      IntegrationStatus.LIVE,
      IntegrationStatus.IN_USE,
      IntegrationStatus.BEING_DEPLOYED,
      IntegrationStatus.DEVELOPMENT,
      IntegrationStatus.AWAITING,
      IntegrationStatus.POSSIBLE,
      IntegrationStatus.PROPOSED,
    ];

    for (const _status of integrationStatusValues) {
      if (protocolsStatus.includes(_status)) {
        status = _status;
        break;
      }
    }

    try {
      // status
      if (status) {
        ctx.fillStyle = protocolStatusInfo[status].bgColor;
        if (status == IntegrationStatus.PROPOSED) {
          ctx.fillStyle = bgColor;
        }
      } else {
        console.warn(`Couldn't find a valid status for organization: ${orgId}`);
      }
      ctx.fillRect(
        x + organizationBlockStatusPadding,
        y + organizationBlockStatusPadding,
        organizationBlockSize - organizationBlockStatusPadding * 2,
        organizationBlockSize - organizationBlockStatusPadding * 2,
      );

      // image
      const image = await loadImage(`${tmpDir}/${org.img}`);
      ctx.drawImage(
        image,
        x + organizationBlockPadding,
        y + organizationBlockPadding,
        w,
        w,
      );

      x += organizationBlockSize;

      // next line
      if (x > width - xPadding * 2) {
        x = xPadding;
        y += organizationBlockSize;
      }
    } catch (e: Error | any) {
      console.log(`Error while processing ${integrations[orgId].img}`);
    }
  }

  // Write the image to file
  const buffer = canvas.toBuffer("image/png");
  fs.writeFileSync(filename, buffer);
  console.log(
    `Image of organizations collection generated and saved to ${filename}`,
  );

  // draw covers
  for (const orgId in integrations) {
    const organization = integrations[orgId];
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

    // organization name
    ctx.font = 'bold 95px "Sans"';
    ctx.fillStyle = "#ffffff";
    ctx.fillText(organization.name, 100, 880);

    // image
    const image = await loadImage(`${tmpDir}/${organization.img}`);
    ctx.drawImage(image, 250, 170, 500, 500);

    // Write the image to file
    const buffer = canvas.toBuffer("image/png");
    fs.writeFileSync(`${coversDir}/${orgId}.png`, buffer);
  }
  console.log(`Covers of organizations generated and saved to ${coversDir}`);
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
