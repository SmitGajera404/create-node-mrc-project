#!/usr/bin/env node
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Project template
const templatePath = join(__dirname, '../backend');

// Function to copy template files
const copyFiles = (src, dest) => {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const files = fs.readdirSync(src);
  for (const file of files) {
    const srcPath = join(src, file);
    const destPath = join(dest, file);

    if (fs.lstatSync(srcPath).isDirectory()) {
      copyFiles(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
};

// Initialize project
const initProject = () => {
  const targetDir = process.cwd();
  console.log('Initializing Node.js project...');

  // Copy files from template
  copyFiles(templatePath, targetDir);

  console.log('Project initialized successfully!');
  console.log(`Folder structure created in: ${targetDir}`);
};

initProject();
