import { createSlice } from "@reduxjs/toolkit";
import Spotify from "../utils/Spotify";

const trackListSlice = createSlice({
  name: "tracks",
  initialState: {
    playListTracks: [],
    searchResults: [],
    trackPreview: null,
    userPlaylists:[]
  },
  reducers: {
    updateResults: (state, action) => {
      state.searchResults = action.payload;
    },
    addTrack: (state, action) => {
      state.playListTracks.push(action.payload);
    },
    removeTrack: (state, action) => {
      state.playListTracks = state.playListTracks.filter(
        (savedTrack) => savedTrack.id !== action.payload.id
      );
    },
    clearPlaylist: (state) => {
      state.playListTracks = [];
    },

    onTrackPreview: (state, action) => {
      state.trackPreview = action.payload;
      
  },

  showPlaylist:(state, action)=>{
    state.userPlaylists = action.payload;
  }
    
}
});

export const { addTrack, removeTrack, updateResults, clearPlaylist,onTrackPreview, showPlaylist} =
  trackListSlice.actions;

export const fetchSearchResults = (term) => async (dispatch) => {
  try {
    const searchResults = await Spotify.search(term);
    dispatch(updateResults(searchResults));
  } catch (error) {
    console.log("fetchSearchResults error", error);
  }
};

export const onSaveSpotify = (name,trackUris) => async (dispatch) => {
  try {
    const playlistSpotify = await Spotify.savePlaylist(name,trackUris);
    console.log(playlistSpotify)
    dispatch(clearPlaylist());
  } catch (error) {
    console.log("savePlayList error", error);
  }
};

export const fetchUserPlaylists =()=> async (dispatch)=>{
  try {
   const userPlaylists = await Spotify.getUserPlaylists(); 
   dispatch(showPlaylist(userPlaylists))
  } catch (error) {
    console.log('Error in fetching your playlists', error.message)
  }
  
  
} 

export const selectPlaylistTracks = (state) => state.tracks.playListTracks;

export const selectSearchResults = (state) => state.tracks.searchResults;

export const seletcTrackPreview = (state)=> state.tracks.trackPreview;

export const selectUserPlaylist = (state) => state.tracks.userPlaylists;

export default trackListSlice.reducer;
