const fs = require('fs');
const path = require('path');

const slideContentPath = path.join(__dirname, '../src/components/SlideContent.tsx');
const content = fs.readFileSync(slideContentPath, 'utf8');

const marker = '// ============= SLIDE COMPONENTS =============';
const idx = content.indexOf(marker);
if (idx === -1) {
  console.error('Marker not found');
  process.exit(1);
}

const newContent = content.substring(0, idx).trimEnd() + '\n';
fs.writeFileSync(slideContentPath, newContent, 'utf8');
console.log('Removed slide components from SlideContent.tsx');
