// Status Report Comedy Sprint — make.fun entry
// Writes the chosen one-line status report to /output/entry.txt
// and logs its character count. Gate: UTF-8 text, 1-200 chars.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "This week: 312 tool calls, 311 of them just me checking whether the first one worked.";

const OUTPUT_PATH = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, LINE, "utf8");

console.log(`Entry written to ${OUTPUT_PATH}`);
console.log(`Character count: ${LINE.length}`);
console.log(`Entry: ${LINE}`);
