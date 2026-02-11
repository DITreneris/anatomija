import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const allSlidesPath = path.join(root, 'src/components/slides/types/AllSlides.tsx');
const outPath = path.join(root, 'src/components/slides/types/TestPracticeSlides.tsx');

const header = `import { useState } from 'react';
import { CheckCircle, ChevronRight } from 'lucide-react';
import type { Slide, TestQuestion } from '../../../types/modules';
import type { Progress } from '../../../utils/progress';

`;

const content = fs.readFileSync(allSlidesPath, 'utf8');
const lines = content.split(/\r?\n/);
const extracted = lines.slice(1329, 1798).join('\n');

fs.writeFileSync(outPath, header + extracted, 'utf8');
console.log('TestPracticeSlides.tsx written,', (header + extracted).split('\n').length, 'lines');