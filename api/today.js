import { promises as fs } from 'fs';
import path from 'path';

export default async function handler(req, res) {
  const today = new Date().toISOString().slice(0, 10);  // Get today's date in YYYY-MM-DD format
  const filePath = path.join(process.cwd(), 'data', 'websites.json');
  
  // Read the JSON file
  const fileContents = await fs.readFile(filePath, 'utf8');
  const websites = JSON.parse(fileContents);
  
  // Find today's website
  const website = websites.find(site => site.date === today);

  if (website) {
    res.status(200).json(website); // Return today's website
  } else {
    res.status(404).json({ message: 'Sorry, there is no website for today!' }); // Return error message
  }
}
