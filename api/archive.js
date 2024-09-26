import fetch from 'node-fetch';

export default async function handler(req, res) {
  const jsonUrl = 'https://joshy.lol/websites.json';

  try {
    // Fetch the JSON file from the URL
    const response = await fetch(jsonUrl);
    if (!response.ok) throw new Error('Failed to fetch websites.json');
    
    const websites = await response.json();
    
    res.status(200).json(websites);  // Return the list of websites
  } catch (error) {
    console.error('Error fetching the JSON file:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
