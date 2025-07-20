const fetch = require('node-fetch');

async function fetchGoogle() {
  try {
    const response = await fetch('https://www.google.com');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const body = await response.text();
    console.log('Fetched Google homepage HTML length:', body.length);

    console.log(body);
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

fetchGoogle();
