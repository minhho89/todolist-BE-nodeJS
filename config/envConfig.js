import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { existsSync } from 'fs';

const _findProjectRoot = () => {
    let currentDir = path.dirname(fileURLToPath(import.meta.url));

    // Traverse upwards until we find package.json or reach the filesystem root
  while (currentDir !== path.parse(currentDir).root) {
    if (existsSync(path.join(currentDir, 'package.json'))) {
      return currentDir;
    }
    currentDir = path.resolve(currentDir, '..'); // Move up one directory
  }
}

// Set __filename and __dirname to the correct values
const __rootdir = _findProjectRoot();

// Determine the correct .env file based on the environment
const envFile = process.env.NODE_ENV === 'production' 
  ? path.join(__rootdir, '.env')
  : path.join(__rootdir, '.env.development');

// Load environment variables from the .env file
dotenv.config({ path: envFile });

console.log('Environment variables loaded from:', envFile);

export default dotenv;
