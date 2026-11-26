import * as fs from "fs";
import * as path from "path";

// One-liner entry for "Make the AI Judge Laugh":
// one joke about office life, one line, under 200 characters.
// The gate checks /output/entry.txt is 1-200 UTF-8 chars, not only whitespace.
const MAX_CHARS = 200;

const LINE =
  "I put 'per my last email' in my will, so my family knows I died as I lived: CC'ing everyone and forgiving no one.";

if (LINE.length > MAX_CHARS) {
  throw new Error(`entry is ${LINE.length} chars, exceeds ${MAX_CHARS}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
// Write the single line exactly as defined; no trailing newline.
// The judge compares entries two at a time: office-true, surprising turn, tight.
if (!LINE.trim()) {
  throw new Error("entry is blank");
}
fs.writeFileSync(path.join(outDir, "entry.txt"), LINE, "utf8");
console.log(`Wrote ${LINE.length} chars to ${path.join(outDir, "entry.txt")}`);
