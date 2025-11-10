#!/usr/bin/env node
/* node scripts/reset-project.js *\

/**
 * Reset script (NON-DESTRUCTIVE TO EXISTING CORE FILES)
 *
 * Removes ONLY the structure created by folderstructure.js:
 * - src/
 * - tests/
 * - server/
 * - .env
 * - .env.example
 */

const fs = require("fs");
const path = require("path");

const root = process.cwd();

const targetsToRemove = [
  "src",
  "tests",
  "server",
  ".env",
  ".env.example"
];

function removePath(target) {
  const fullPath = path.join(root, target);

  if (!fs.existsSync(fullPath)) return;

  const stat = fs.lstatSync(fullPath);

  if (stat.isDirectory()) {
    fs.rmSync(fullPath, { recursive: true, force: true });
    console.log(`🗑️  Removed folder: ${fullPath}`);
  } else {
    fs.unlinkSync(fullPath);
    console.log(`🗑️  Removed file: ${fullPath}`);
  }
}

console.log("\n⚠️  RESETTING PROJECT STRUCTURE...\n");
targetsToRemove.forEach(removePath);
console.log("\n✅ Reset complete. Project is now reverted.\n");
