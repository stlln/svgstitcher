import fs from 'fs';
import {ErrorHandler} from './error-handler';

export default function validateFileExists(path: string, fatalIfMissing = false): boolean {
  const exists = fs.existsSync(path);

  if (!exists && fatalIfMissing) {
    new ErrorHandler(`File '${path}' not found`).fatal();
  }

  return exists;
}
