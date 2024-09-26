import { promises as fs } from 'fs';
import path from 'path';

export default async function handler(req, res) {
  const filePath = path.join(process.cwd(), 'data', 'websites.json');
  
  // Read the JSON file
  const fileContents = await fs.readFile(filePath, 'utf8');
  const websites = JSON.parse(fileContents);
  
  res.status(200).json(websites);  // Return the list of websites
}
