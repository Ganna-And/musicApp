


const clientId = '43ca929e8f054debbd76d1a9c5a39f94'; // Insert client ID here.
const redirectUri = 'https://music-app-delta-han.vercel.app/'; // Have to add this to your accepted Spotify redirect URIs on the Spotify API.
let accessToken;

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/'); // This clears the parameters, allowing us to grab a new access token when it expires.
      return accessToken;
    } else {
const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=user-read-private%20playlist-modify-public&redirect_uri=${redirectUri}&show_dialog=true`;

      ;
      window.location = accessUrl;
    }
  },

  search(term) {
    const accessToken = Spotify.getAccessToken();
    if(!accessToken){
      alert('You access token is not fetched, please try one more time')
    }
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}shows?offset=0&limit=7`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (!jsonResponse.tracks) {
        return [];
      }
      return jsonResponse.tracks.items.map(track => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        almumId:track.album.id,
        img: track.album.images[0].url,
        uri: track.preview_url,
        popularity: track.popularity,
      }));
    });
  },

  savePlaylist(name, trackUris) {
    
    if (!name || !trackUris.length) {
      console.log('no name of track uris')
      alert('no name of track uris')
      return;
    }

    const accessToken = Spotify.getAccessToken();
    const headers = { Authorization: `Bearer ${accessToken}` };
    let userId;

    return fetch('https://api.spotify.com/v1/me', {headers: headers}
    ).then(response => response.json()
    ).then(jsonResponse => {
      
      userId = jsonResponse.id;
      console.log(userId)
      return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
        headers: headers,
        method: 'POST',
        body: JSON.stringify({name: name})
      }).then(response => response.json()
      ).then(jsonResponse => {
        const playlistId = jsonResponse.id;
        console.log(playlistId)
        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
          headers: headers,
          method: 'POST',
          body: JSON.stringify({uris: trackUris})
        });
      });
    });
  },

  
  getUserPlaylists(){
    const accessToken = Spotify.getAccessToken();
    const headers = { Authorization: `Bearer ${accessToken}` };
    let userId;

    return fetch(`https://api.spotify.com/v1/me`, {
      headers: headers,
    })
    .then(response=> response.json())
    .then(jsonResponse =>{
      if(!jsonResponse){
        console.log('no user id fetched')
        alert('no user id fetched')
      }
      userId = jsonResponse.id;
      return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`,{
        headers:headers
      })
      .then(response=>response.json())
      .then(jsonResponse =>{
       if(!jsonResponse){
        console.log('no playlist fetched')
        alert('no playlist fetched')
       }
        return jsonResponse.items.map(playlist=>({
          id:playlist.id,
          name: playlist.name,
          tracks: playlist.tracks.total,
          owner: playlist.owner.display_name
         
        }))
      })
    })
    
  }
};

export default Spotify;