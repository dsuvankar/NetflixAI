// gptSlice.js
import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieResult: null,
    movieNames: null,
    movieResults: null,
    searchError: null,
  },
  reducers: {
    toggleGptSearch: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addMovieResults: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
      state.searchError = null;
    },
    clearMovieResults: (state, action) => {
      state.movieResults = null;
      state.movieNames = null;
      state.searchError = null;
    },
    setSearchError: (state, action) => {
      state.searchError = action.payload;
    },
  },
});

export default gptSlice.reducer;
export const {
  toggleGptSearch,
  addMovieResults,
  clearMovieResults,
  setSearchError,
} = gptSlice.actions;
