import { createSlice, createSelector } from "@reduxjs/toolkit";

const trackListSlice = createSlice({
  name: "tracks",
  initialState: {
    playListTracks: [
      { id: 4, title: "title1", artist: "artist1", album: "bilo6" },
      { id: 5, title: "title2", artist: "artist2", album: "bilo5" },
      { id: 6, title: "title3", artist: "artist3", album: "bilo4" },
    ],
    searchResults: [
      { id: 1, title: "haliVali", artist: "Paratruper", album: "bilo super" },
      { id: 2, title: "Moi goda", artist: "Bogdan", album: "bilo bogatstvo" },
      { id: 3, title: "haliVali", artist: "Paratruper", album: "bilo super" },
    ]
  },
  reducers:{
    addTrack:(state, action)=>{
        state.playListTracks.push(action.payload);
    },
    removeTrack:(state, action)=>{
        state.playListTracks = state.playListTracks.filter((savedTrack)=> savedTrack.id !== action.payload.id);
    }
  }
});


export const {addTrack, removeTrack} = trackListSlice.actions;
export const selectPlaylistTracks = createSelector(
    state => state.tracks.playListTracks,
    playListTracks => playListTracks
  );
  
  export const selectSearchResults = createSelector(
    state => state.tracks.searchResults,
    searchResults => searchResults
  );
export default trackListSlice.reducer
