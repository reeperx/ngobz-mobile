const fs = require('fs');
const https = require('https');
const path = require('path');

const contentFile = 'C:/Users/rix10/.gemini/antigravity-ide/brain/887c7855-9c85-4fb8-a0a7-8d3262bdf05b/.system_generated/steps/197/content.md';
if (!fs.existsSync(contentFile)) {
  console.error('File not found:', contentFile);
  process.exit(1);
}

const content = fs.readFileSync(contentFile, 'utf8');

// Extract all image urls
const regex = /https:\/\/[^"'<>\s]+?(?:jpg|jpeg|png|webp)[^"'<>\s]*/gi;
const matches = content.match(regex) || [];

const cleaned = [...new Set(matches.map(url => url.replace(/&amp;/g, '&')))]
  .filter(url => !url.includes('rsrc.php') && !url.includes('.ico') && url.includes('fbcdn.net'));

console.log(`Found ${cleaned.length} candidate image URLs:`);
cleaned.forEach((url, i) => console.log(`[${i+1}] ${url}`));

// Also search for any other content mentions
const textSnippets = [];
const lines = content.split('\n');
for (const line of lines) {
  if (line.includes('toilet') || line.includes('cooler') || line.includes('warmer') || line.includes('VIP') || line.includes('rent') || line.includes('076')) {
    textSnippets.push(line.trim());
  }
}
console.log(`\nMentions found (${textSnippets.length}):`);
textSnippets.slice(0, 10).forEach(s => console.log(s.slice(0, 200)));
