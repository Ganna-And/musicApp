import {configureStore} from '@reduxjs/toolkit';
import TracksReducer from '../components/TrackListSlice';
import PreviewSlice from '../components/preview/PreviewSlice';

export const store = configureStore({
    reducer:{
        tracks:  TracksReducer,
        trackDetails: PreviewSlice
    }
});