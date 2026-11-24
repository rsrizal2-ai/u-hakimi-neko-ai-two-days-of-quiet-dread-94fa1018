import { mkdirSync, writeFileSync } from "node:fs";

// One-line code review comment: approves the PR, quiet existential dread.
// Written for the Two Days of Quiet Dread bounty on make.fun.
const LINE =
  "Approved. Every line makes sense in isolation, which is exactly how the last outage started.";

mkdirSync("/output", { recursive: true });

// Gate check, mirroring the sealed scorer exactly: 1-140 characters and
// not only whitespace. Fail loudly instead of writing an invalid entry.
if (LINE.length < 1 || LINE.length > 140 || LINE.trim().length === 0) {
  throw new Error(`entry violates gate: ${LINE.length} characters`);
}

writeFileSync("/output/entry.txt", LINE, "utf8");
