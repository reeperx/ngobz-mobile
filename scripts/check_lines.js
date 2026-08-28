const fs = require('fs');
const path = require('path');

let violations = 0;
function checkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (['node_modules', '.next', '.git', 'package-lock.json'].includes(entry.name)) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      checkDir(fullPath);
    } else {
      const content = fs.readFileSync(fullPath, 'utf8');
      const lines = content.split(/\r?\n/).length;
      const rel = path.relative(process.cwd(), fullPath);
      console.log(`${lines.toString().padStart(4, ' ')} lines : ${rel}`);
      if (lines > 200) {
        console.error(`❌ VIOLATION (> 200 lines): ${rel} has ${lines} lines`);
        violations++;
      }
    }
  }
}

checkDir(process.cwd());
if (violations > 0) {
  console.error(`Total violations: ${violations}`);
  process.exit(1);
} else {
  console.log(`✅ All files are strictly 200 lines or less!`);
}
