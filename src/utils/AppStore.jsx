import { configureStore } from "@reduxjs/toolkit";
import userReducer from './UserSlice'
import moviesReducer from './MovieSlice'
import exploreReducer from './ExploreSlise'

const AppStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        explore: exploreReducer
    },
});

export default AppStore;