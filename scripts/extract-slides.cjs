const fs = require('fs');
const path = require('path');

const slideContentPath = path.join(__dirname, '../src/components/SlideContent.tsx');
const outputPath = path.join(__dirname, '../src/components/slides/types/AllSlides.tsx');

const content = fs.readFileSync(slideContentPath, 'utf8');
const match = content.match(/\/\/ ============= SLIDE COMPONENTS =============\r?\n([\s\S]*)$/);

if (!match) {
  console.error('Could not find slide components section');
  process.exit(1);
}

const header = `import { useState, useEffect } from 'react';
import { CheckCircle, Sparkles, MessageCircle, Languages, Lightbulb, Target, Layers, Repeat } from 'lucide-react';
import { CopyButton, TemplateBlock } from '../shared';
import { getColorClasses } from '../utils/colorStyles';
import type {
  Slide,
  TestQuestion,
  DefinitionsContent,
  PromptTypesContent,
  PromptTechniquesContent,
  WorkflowSummaryContent,
  PromptTemplateContent,
  TransitionContent,
  HierarchyBlock,
  QualityCriteria,
  FullExampleBlock,
  ProductivityInfographicContent,
} from '../../../types/modules';

`;

const body = match[1].replace(/\nfunction /g, '\nexport function ');
fs.writeFileSync(outputPath, header + body, 'utf8');
console.log('Created AllSlides.tsx');
