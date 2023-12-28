import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
    name: "movie",
    initialState: {
        playNowMovie:null,
        trailerVideo:null
    },   
    reducers:{
        addPlayNowMovie:(state,action) => {
            state.playNowMovie = action.payload
        },
        addTrailerVideo:(action,state) => {
            state.trailerVideo = action.payload
        }
    }
})

export const {addPlayNowMovie,addTrailerVideo} = MovieSlice.actions;

export default MovieSlice.reducer;