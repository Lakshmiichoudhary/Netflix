import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
    name: "movie",
    initialState: {
        playNowMovie:null,
    },   
    reducers:{
        addPlayNowMovie:(state,action) => {
            state.playNowMovie = action.payload
        }
    }
})

export const {addPlayNowMovie} = MovieSlice.actions;

export default MovieSlice.reducer;