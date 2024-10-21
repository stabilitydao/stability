import { contests } from "../src";

const genTotal = 10;
const WEEK = 86400 * 7;
const PERIOD = 2 * WEEK;

console.log(`=== 🏆 Contests Maker`);
const curLen = Object.keys(contests).length;
let lastId = Object.keys(contests)[curLen - 1];
let prevTs = contests[lastId].end;
for (
  let i = +(lastId.replace("y", "") || 0) + 1;
  i < +(lastId.replace("y", "") || 0) + 1 + genTotal;
  i++
) {
  const start = prevTs + 1;
  const end = prevTs + PERIOD;
  const startDateArr = new Date(start * 1000).toUTCString().split(" ");
  const endDateArr = new Date(end * 1000).toUTCString().split(" ");
  const name = `Yield Contest #${i}`;
  const dates = `${startDateArr[1]} ${startDateArr[2]} ${startDateArr[3]} - ${endDateArr[1]} ${endDateArr[2]} ${endDateArr[3]}`;
  console.log(`y${i}: \{
  // ${dates}
  name: "${name}",
  start: ${start}, // ${new Date(start * 1000).toUTCString()}
  end: ${end}, // ${new Date(end * 1000).toUTCString()}
  minEarn: "TBA",
  rewards: "TBA",
\},`);
  prevTs += PERIOD;
}
