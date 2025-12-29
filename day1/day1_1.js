// Source - https://stackoverflow.com/a
// Posted by RobertoNovelo, modified by community. See post 'Timeline' for change history
// Retrieved 2025-12-29, License - CC BY-SA 4.0
import { readFileSync } from "fs";

const args = process.argv.slice(2)

const inputFile = args[0]

const input = readFileSync(inputFile, { encoding: "utf8" });

console.log(input.split("\r\n"));
