const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files from the build directory
app.use(express.static(path.join(__dirname, './build')));

// Import Spotify functionality from spotify.js
const Spotify = require('./spotify');

// Define routes and middleware
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});



app.get('/login', (req, res) => {
  // Handle login request and Spotify authentication using Spotify methods from spotify.js
  res.redirect();
});

app.get('/callback', async (req, res) => {
  // Handle Spotify callback and exchange authorization code for access token using Spotify methods from spotify.js
  await Spotify.handleCallback(req, res);
});

// Other routes and middleware

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Function to initiate the Spotify authorization flow
/* export function initiateAuthorization() {
  const authorizationEndpoint = 'https://accounts.spotify.com/authorize';
  const queryParams = new URLSearchParams({
    client_id: CLIENT_ID,
    response_type: 'code',
    redirect_uri: REDIRECT_URI,
    scope: SCOPES.join(' '),
  });

  const authorizationUrl = `${authorizationEndpoint}?${queryParams}`;
  window.location.href = authorizationUrl;
} 

export async function handleCallback() {
  const code = new URLSearchParams(window.location.search).get('code');
  const tokenEndpoint = 'https://accounts.spotify.com/api/token';

  const response = await fetch(tokenEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      redirect_uri: REDIRECT_URI,
      client_id: CLIENT_ID,
      // Add client secret if required by your app
    }),
  });
*/