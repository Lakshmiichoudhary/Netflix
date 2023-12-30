import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    popularMovies: null,
    upComingMovies: null,
    nowPlayingMovies: null,
    topRatedMovies:null
  },
  reducers: {
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addUpComingMovies: (state,action) => {
      state.upComingMovies = action.payload;
    },
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    }
  }
});

export const { addNowPlayingMovies,addUpComingMovies, addPopularMovies, addTopRatedMovies } =
  moviesSlice.actions;

export default moviesSlice.reducer;