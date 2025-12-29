// Source - https://stackoverflow.com/a
// Posted by RobertoNovelo, modified by community. See post 'Timeline' for change history
// Retrieved 2025-12-29, License - CC BY-SA 4.0
import { readFileSync } from "fs";

const args = process.argv.slice(2);

const inputFile = args[0];

const rawInput = readFileSync(inputFile, { encoding: "utf8" });

const input = rawInput.split("\r\n");

const output = input
  .map((itemStr) => [itemStr[0], itemStr.slice(1)])
  .map(([dir, numStr]) => [dir, parseInt(numStr, 10)]);

console.log(output);
