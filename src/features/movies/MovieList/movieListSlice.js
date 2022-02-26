import { createSlice } from "@reduxjs/toolkit";
import {totalPagesForLists} from "../../totalPagesForLists";

const moviesListSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    genres: [],
    total_pages: totalPagesForLists,
    totalResults: '',
    loading: true,
    error: false,
  },
  reducers: {
    fetchMovies: (state) => {
      state.loading = true;
      state.error = false;
    },
    setMovies: (state, { payload: moviesFromApi }) => {
      state.movies = moviesFromApi;
      state.loading = false;
    },
    setError: state => {
      state.error = true;
      state.loading = false;
    },
    setGenres: (state, { payload: genresApi }) => {
      state.genres = genresApi;
    },
    setTotalMoviesPages: (state, { payload: totalPages }) => {
      state.total_pages = totalPages;
    },
    setTotalResults: (state, { payload: totalResults }) => {
      state.totalResults = totalResults;
    },
  },
});

export const {
  fetchMovies,
  setMovies,
  setError,
  setGenres,
  setTotalMoviesPages,
  setTotalResults,
} = moviesListSlice.actions;

const selectMoviesState = state => state.movies;

export const selectMovies = state => selectMoviesState(state).movies;
export const selectLoading = state => selectMoviesState(state).loading;
export const selectError = state => selectMoviesState(state).error;
export const selectGenres = state => selectMoviesState(state).genres;
export const selectTotalMoviesPages = state => selectMoviesState(state).total_pages;
export const selectTotalResults = state => selectMoviesState(state).totalResults;

export default moviesListSlice.reducer;