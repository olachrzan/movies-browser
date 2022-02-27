import { createSlice } from "@reduxjs/toolkit";

const movieDetailsSlice = createSlice({
  name: 'movieDetails',
  initialState: {
    movieDetails: [],
    cast: [],
    crew: [],
    loading: false,
    error: false,
  },
  reducers: {
    fetchMovieDetails: state => {
      state.loading = true;
    },
    setMovieDetails: (state, { payload: movieDetailsApi }) => {
      state.movieDetails = movieDetailsApi;
      state.loading = false;
    },
    setMovieTeam: (state, { payload }) => {
      state.cast = payload.cast;
      state.crew = payload.crew;
    },
    setError: state => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchMovieDetails,
  setMovieDetails,
  setMovieTeam,
  setError,
} = movieDetailsSlice.actions;

const selectMovieDetailsState = state => state.moviesDetails;

export const selectMovieDetails = state => selectMovieDetailsState(state).movieDetails;
export const selectMovieId = state => selectMovieDetailsState(state).id;
export const selectMovieCast = state => selectMovieDetailsState(state).cast;
export const selectMovieCrew = state => selectMovieDetailsState(state).crew;
export const selectMovieLoading = state => selectMovieDetailsState(state).loading;
export const selectMovieError = state => selectMovieDetailsState(state).error;


export default movieDetailsSlice.reducer;