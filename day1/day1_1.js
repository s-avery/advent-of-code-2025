// Source - https://stackoverflow.com/a
// Posted by RobertoNovelo, modified by community. See post 'Timeline' for change history
// Retrieved 2025-12-29, License - CC BY-SA 4.0
import { readFileSync } from "fs";

const args = process.argv.slice(2);

const inputFile = args[0];

const rawInput = readFileSync(inputFile, { encoding: "utf8" }).trim();

// console.log(JSON.stringify(rawInput));

const input = rawInput.split("\n");

// this is a helper function, dir can either equal "L" or "R"
// "R" is a positive turn, "L" is a negative turn
// note, this isnt vbery defensive we dont confirm the L
const parseDir = (dir) => (dir === "R" ? 1 : -1);

const output = input
  // parse the string into a tuple of two strings
  .map((itemStr) => [itemStr[0], itemStr.slice(1)])
  //   parse them into polarity and integers of turnings
  .map(([dirStr, numStr]) => [parseDir(dirStr), parseInt(numStr, 10)])
  //   multiply that to get turnings with direction inherent
  .map(([polarity, numTurns]) => polarity * numTurns);

console.log(output);

let dialPosition = 50;

let zeroCount = 0;

console.log(`starting position: ${dialPosition}`);

for (const turning of output) {
  console.log(`turning by: ${turning}`);
  dialPosition = dialPosition + turning;
  console.log(`dial position: ${dialPosition}`);
  if (dialPosition % 100 === 0) {
    zeroCount++;
  }
  console.log(`zero count: ${zeroCount}`);
}
