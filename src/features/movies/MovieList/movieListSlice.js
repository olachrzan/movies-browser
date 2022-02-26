import { createSlice } from "@reduxjs/toolkit";
import { totalPagesForLists } from "../../totalPagesForLists";

const moviesListSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    genres: [],
    loading: false,
    error: false,
    totalPages: totalPagesForLists,
    totalResults: '',
  },
  reducers: {
    fetchMovies: (state) => {
      state.loading = true;
      state.error = false;
    },
    fetchMoviesSuccess: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.movies = payload.results;
      state.totalPages = payload.total_pages;
      state.totalResults = payload.total_results;
    },
    fetchMoviesFailure: state => {
      state.error = true;
      state.loading = false;
    },
    setGenres: (state, { payload: genresApi }) => {
      state.genres = genresApi;
    },
  },
});

export const {
  fetchMovies,
  fetchMoviesSuccess,
  fetchMoviesFailure,
  setGenres,
} = moviesListSlice.actions;

const selectMoviesState = state => state.movies;

export const selectMovies = state => selectMoviesState(state).movies;
export const selectLoading = state => selectMoviesState(state).loading;
export const selectError = state => selectMoviesState(state).error;
export const selectGenres = state => selectMoviesState(state).genres;
export const selectTotalMoviesPages = state => selectMoviesState(state).totalPages;
export const selectTotalResults = state => selectMoviesState(state).totalResults;

export default moviesListSlice.reducer;