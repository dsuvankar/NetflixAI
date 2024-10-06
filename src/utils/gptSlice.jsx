// gptSlice.js
import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieResult: null,
    movieNames: null,
    movieResults: null,
    searchError: null, // New state to track the error
  },
  reducers: {
    toggleGptSearch: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addMovieResults: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
      state.searchError = null; // Reset error on successful movie results
    },
    clearMovieResults: (state, action) => {
      state.movieResults = null;
      state.movieNames = null;
      state.searchError = null; // Reset error when clearing results
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
