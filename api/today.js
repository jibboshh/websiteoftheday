export default async function handler(req, res) {
  const today = new Date().toISOString().slice(0, 10);  // Get today's date in YYYY-MM-DD format
  const jsonUrl = 'https://joshy.lol/websites.json';

  try {
    // Fetch the JSON file from the URL
    const response = await fetch(jsonUrl);
    if (!response.ok) throw new Error('Failed to fetch websites.json');
    
    const websites = await response.json();
    
    // Find today's website
    const website = websites.find(site => site.date === today);
    
    if (website) {
      res.status(200).json(website); // Return today's website
    } else {
      res.status(404).json({ message: 'Sorry, there is no website for today!' });
    }
  } catch (error) {
    console.error('Error fetching the JSON file:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
