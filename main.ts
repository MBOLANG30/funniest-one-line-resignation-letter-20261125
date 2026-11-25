import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "For three years I told everyone to slow down and nobody listened, so I'm resigning and taking the whole system down with me.";

// The bounty allows exactly one line of 1–140 characters; fail loudly
// instead of writing an entry the judge cannot accept.
if (line.length === 0 || line.length > 140 || line.includes("\n")) {
  throw new Error(`entry line must be 1–140 chars on a single line, got ${line.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
