import { createSlice } from "@reduxjs/toolkit";
import Spotify from "../utils/Spotify";

const trackListSlice = createSlice({
  name: "tracks",
  initialState: {
    playListTracks: [],
    searchResults: [],
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
  },
});

export const { addTrack, removeTrack, updateResults, clearPlaylist } =
  trackListSlice.actions;

export const fetchSearchResults = (term) => async (dispatch) => {
  try {
    const searchResults = await Spotify.search(term);
    dispatch(updateResults(searchResults));
  } catch (error) {
    console.log("fetchSearchResults error", error);
  }
};

export const onSaveSpotify = (name, trackUris) => async (dispatch) => {
  try {
    const playlistSpotify = await Spotify.savePlayList(name, trackUris);
    dispatch(clearPlaylist(playlistSpotify));
  } catch (error) {
    console.log("savePlayList error", error);
  }
};

export const selectPlaylistTracks = (state) => state.tracks.playListTracks;

export const selectSearchResults = (state) => state.tracks.searchResults;

export default trackListSlice.reducer;
