import { createSlice } from "@reduxjs/toolkit";

const movieDetailsSlice = createSlice({
    name: 'movieDetails',
    initialState: {
        movieDetails: [],
        cast: [],
        crew: [],
    },
    reducers: {
        fetchMovieDetails: () => { },
        setMovieDetails: (state, { payload: movieDetailsApi }) => {
            state.movieDetails = movieDetailsApi;
            state.loading = false;
        },
        setCast: (state, { payload: movieCast }) => {
            state.cast = movieCast;
        },
        setCrew: (state, { payload: movieCrew }) => {
            state.crew = movieCrew
        },
        setError: state => {
            state.error = true;
        },
    },
});

export const {
    fetchMovieDetails,
    setMovieDetails,
    setCast,
    setCrew,
    setError,
} = movieDetailsSlice.actions;

const selectMovieDetailsState = state => state.movieDetails;

export const selectMovieDetails = state => selectMovieDetailsState(state).movieDetails;
export const selectMovieCast = state => selectMovieDetailsState(state).cast;
export const selectMovieCrew = state => selectMovieDetailsState(state).crew;
export const selectMovieLoading = state => selectMovieDetailsState(state).loading;
export const selectMovieError = state => state.error;

export default movieDetailsSlice.reducer;