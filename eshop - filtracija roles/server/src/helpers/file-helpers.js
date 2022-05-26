import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const filePath = fileURLToPath(import.meta.url);
const rootDirPath = filePath.slice(0, filePath.indexOf('src'));

export const removeFile = (relativePath) => {
  const fullPath = path.join(rootDirPath, process.env.PUBLIC_PATH, relativePath);
  if (fs.existsSync(fullPath)) {
    fs.unlinkSync(fullPath)
  }
}