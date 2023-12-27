import { configureStore } from "@reduxjs/toolkit";
import userReducer from './UserSlice'
import movieReducer from './MovieSlice'

const AppStore = configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer
    }
})

export default AppStore;