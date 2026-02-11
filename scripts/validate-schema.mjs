#!/usr/bin/env node
/**
 * A-M1: JSON Schema + CI validacija.
 * Validates modules.json (required). Optionally promptLibrary.json and glossary.json.
 * Exit 0 = OK, 1 = validation failed (build should fail).
 */
import Ajv from 'ajv';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const dataDir = join(root, 'src', 'data');

const ajv = new Ajv({ allErrors: true, strict: false });

function loadJson(path) {
  try {
    return JSON.parse(readFileSync(path, 'utf8'));
  } catch (e) {
    console.error(`Failed to read ${path}:`, e.message);
    process.exit(1);
  }
}

function validateModules() {
  const schemaPath = join(__dirname, 'schemas', 'modules.schema.json');
  const schema = loadJson(schemaPath);
  const dataPath = join(dataDir, 'modules.json');
  const data = loadJson(dataPath);

  const validate = ajv.compile(schema);
  const valid = validate(data);
  if (!valid) {
    console.error('modules.json validation failed:\n');
    validate.errors.forEach((err) => {
      const path = err.instancePath || '/';
      console.error(`  ${path}: ${err.message}`);
      if (err.params?.allowedValues) console.error(`    (allowed: ${err.params.allowedValues.join(', ')})`);
    });
    return false;
  }
  console.log('modules.json: OK');
  return true;
}

function validatePromptLibrary() {
  const schema = loadJson(join(__dirname, 'schemas', 'promptLibrary.schema.json'));
  const data = loadJson(join(dataDir, 'promptLibrary.json'));
  const validate = ajv.compile(schema);
  if (!validate(data)) {
    console.error('promptLibrary.json validation failed:\n');
    validate.errors.forEach((err) => console.error(`  ${err.instancePath || '/'}: ${err.message}`));
    return false;
  }
  console.log('promptLibrary.json: OK');
  return true;
}

function validateGlossary() {
  const schema = loadJson(join(__dirname, 'schemas', 'glossary.schema.json'));
  const data = loadJson(join(dataDir, 'glossary.json'));
  const validate = ajv.compile(schema);
  if (!validate(data)) {
    console.error('glossary.json validation failed:\n');
    validate.errors.forEach((err) => console.error(`  ${err.instancePath || '/'}: ${err.message}`));
    return false;
  }
  console.log('glossary.json: OK');
  return true;
}

function main() {
  let ok = validateModules() && validatePromptLibrary() && validateGlossary();
  if (!ok) process.exit(1);
  console.log('Schema validation passed.');
}

main();
