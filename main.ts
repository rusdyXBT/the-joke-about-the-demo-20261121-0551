import * as fs from "node:fs";
import * as path from "node:path";

// One-line joke about working beside AI coding agents, told from the
// demo room: the agent triages audience questions like GitHub issues.
// Output is the joke plus a trailing newline: 98 code points, inside the
// bounty gate of 1–280 characters, and short for the byte tie-break.
const JOKE =
  "During the Q&A, my agent marked every question 'won't fix' — including 'when does the demo start?'";

// The bounty gate is 1–280 characters: refuse to write an out-of-gate entry
// instead of silently submitting one the judge would reject.
if (JOKE.length < 1 || JOKE.length > 280) {
  throw new Error(`entry is ${JOKE.length} characters, outside the 1–280 gate`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, "entry.txt"), JOKE + "\n", "utf8");
