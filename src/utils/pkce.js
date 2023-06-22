// Function to generate a random string
function generateRandomString(length) {
  let text = '';
  let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

// Function to generate the code challenge
async function generateCodeChallenge(codeVerifier) {
  // Code challenge generation logic
  function base64encode(string) {
    return btoa(String.fromCharCode.apply(null, new Uint8Array(string)))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');
  }

  const encoder = new TextEncoder();
  const data = encoder.encode(codeVerifier);
  const digest = await window.crypto.subtle.digest('SHA-256', data);

  return base64encode(digest);
}

// Define your client ID and redirect URI
const clientId = '43ca929e8f054debbd76d1a9c5a39f94'; // Replace with your actual client ID
const redirectUri = 'https://music-app-delta-han.vercel.app/callback'; // Replace with your desired redirect URI

// Generate a random code verifier and calculate the code challenge
let codeVerifier = generateRandomString(128);
generateCodeChallenge(codeVerifier).then(codeChallenge => {
  let state = generateRandomString(16);
  let scope = 'user-read-private user-read-email';

  // Store the code verifier in local storage for later use
  localStorage.setItem('code_verifier', codeVerifier);

  // Construct the authorization URL with required parameters
  let args = new URLSearchParams({
    response_type: 'code',
    client_id: clientId,
    scope: scope,
    redirect_uri: redirectUri,
    state: state,
    code_challenge_method: 'S256',
    code_challenge: codeChallenge
  });

  // Redirect the user to the Spotify authorization URL
  window.location.href = 'https://accounts.spotify.com/authorize?' + args;
});

// Parse the URL to retrieve the authorization code
function getCodeFromURL(){
  const urlParams = new URLSearchParams(window.location.search);
return urlParams.get('code')
}

const code = getCodeFromURL()


// Retrieve the code verifier from local storage
codeVerifier = localStorage.getItem('code_verifier');

// Construct the request body for exchanging the authorization code for an access token
let body = new URLSearchParams({
  grant_type: 'authorization_code',
  code: code,
  redirect_uri: redirectUri,
  client_id: clientId,
  code_verifier: codeVerifier
});

const response = fetch('https://accounts.spotify.com/api/token', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: body
})
  .then(response => {
    if (!response.ok) {
      throw new Error('HTTP status ' + response.status);
    }
    return response.json();
  })
  .then(data => {
    localStorage.setItem('access_token', data.access_token);
  })
  .catch(error => {
    console.error('Error:', error);
  });

  async function getProfile(accessToken) {
     accessToken = localStorage.getItem('access_token');
  
    const response = await fetch('https://api.spotify.com/v1/me', {
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    });
  
    const data = await response.json();
  }

// Export necessary functions for external use
module.exports = { generateRandomString, generateCodeChallenge };
