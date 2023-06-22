import { generateRandomString, generateCodeChallenge } from "./pkce";
let accessToken;
let clientId = "43ca929e8f054debbd76d1a9c5a39f94";
let redirect_URI = "https://music-app-delta-han.vercel.app/callback";


const Spotify = {
  getAccessToken() {
    if (accessToken) {
        console.log(accessToken)
      return accessToken;
    }
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code'); // Function to extract the authorization code from the URL
    const codeVerifier = localStorage.getItem('code_verifier');

    if (code) {
      // Clear the URL fragment
      window.history.pushState('', document.title, window.location.pathname);

      // Exchange the authorization code for an access token
      const body = new URLSearchParams({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: redirect_URI,
        client_id: clientId,
        code_verifier: codeVerifier,
      });

      return fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: body,
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('HTTP status ' + response.status);
          }
          return response.json();
        })
        .then((data) => {
          accessToken = data.access_token;
          const expiresIn = data.expires_in;

          // Store the access token and its expiration time
          localStorage.setItem('access_token', accessToken);
          localStorage.setItem('expires_in', expiresIn);
          return accessToken;
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    } else {
      // Perform PKCE flow
      const codeVerifier = generateRandomString(128);
      const codeChallengePromise = generateCodeChallenge(codeVerifier);

      codeChallengePromise.then((codeChallenge) => {
        localStorage.setItem('code_verifier', codeVerifier);

        const state = generateRandomString(16);
        const scope = 'user-read-private user-read-email';

        const args = new URLSearchParams({
          response_type: 'code',
          client_id: clientId,
          scope: scope,
          redirect_uri: redirect_URI,
          state: state,
          code_challenge_method: 'S256',
          code_challenge: codeChallenge,
        });

        const authorizationURL =
          'https://accounts.spotify.com/authorize?' + args;
        window.location.href = authorizationURL;
      });
    }
  },

  // Rest of the code remains the same...
   async search(term){
    
    const accessToken = Spotify.getAccessToken();
    const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const jsonResponse = await response.json();
    if (!jsonResponse.tracks) {
      return [];
    }
    
    return jsonResponse.tracks.items.map((track) => ({
      id: track.id,
      name: track.name,
      artist: track.artists[0].name,
      album: track.album.name,
      uri: track.uri,
    }));
  },

  savePlayList(name, trackUris) {
    if (!name || !trackUris.length) {
      return;
    }
  
    const accessToken = Spotify.getAccessToken();
    const headers = { Authorization: `Bearer ${accessToken}` };
    let userId;
  
    return fetch("https://api.spotify.com/v1/me", { headers: headers })
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (!jsonResponse || !jsonResponse.id) {
          throw new Error("Invalid user ID");
        }
        userId = jsonResponse.id;
        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
          headers: headers,
          method: "POST",
          body: JSON.stringify({ name: name }),
        });
      })
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (!jsonResponse || !jsonResponse.id) {
          throw new Error("Invalid playlist ID");
        }
        const playlistId = jsonResponse.id;
        return fetch(
          `https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`,
          {
            headers: headers,
            method: "POST",
            body: JSON.stringify({ uris: trackUris }),
          }
        );
      });
  } 
};


 


export default Spotify;
