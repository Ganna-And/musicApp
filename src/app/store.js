import {configureStore} from '@reduxjs/toolkit';
import TracksReducer from '../components/TrackListSlice'

export const store = configureStore({
    reducer:{
        tracks:  TracksReducer,
    }
});