import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const allSlidesPath = path.join(root, 'src/components/slides/types/AllSlides.tsx');
const blockSlidesPath = path.join(root, 'src/components/slides/types/BlockSlides.tsx');

const header = `import { CheckCircle } from 'lucide-react';
import { CopyButton, TemplateBlock } from '../shared';
import { getColorClasses } from '../utils/colorStyles';
import type { QualityCriteria, FullExampleBlock } from '../../../types/modules';

`;

const content = fs.readFileSync(allSlidesPath, 'utf8');
const lines = content.split(/\r?\n/);
const extracted = lines.slice(1191, 2598).join('\n');

fs.writeFileSync(blockSlidesPath, header + extracted, 'utf8');
console.log('BlockSlides.tsx written,', (header + extracted).split('\n').length, 'lines');