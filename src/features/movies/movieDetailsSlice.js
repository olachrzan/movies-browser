import { createSlice } from "@reduxjs/toolkit";

const movieDetailsSlice = createSlice({
    name: 'movieDetails',
    initialState: {
        movieDetails: [],
        cast: [],
        crew: [],
        loading: false,
        error: false,
        id: '',
    },
    reducers: {
        fetchMovieDetails: state => {
            state.loading = !state.loading;
        },
        setMoviesDetails: (state, { payload: movieDetailsApi }) => {
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
        }
        // setId: (state, { payload: id }) => {
        //     state.id = id;
        // },
        //     findMovieId: (state, { payload: movieId }) => {
        //         state.movieDetails.findIndex(state.id = movieId);
        //     },
    },
});

export const {
    fetchMovieDetails,
    setMoviesDetails,
    setId,
    setCast,
    setCrew,
    setError,
} = movieDetailsSlice.actions;

const selectMovieDetailsState = state => state.movieDetails;

export const selectMovieDetails = state => selectMovieDetailsState(state).movieDetails;
export const selectMovieCast = state => selectMovieDetailsState(state).cast;
export const selectMovieCrew = state => selectMovieDetailsState(state).crew;
export const selectMovieLoading = state => selectMovieDetailsState(state).loading;
export const selectMovieError = state => selectMovieDetailsState(state).error;

export const selectGetMoviebyId = (state, movieId) => {
    selectMovieDetails(state).find(({ id }) => id = movieId);
};

export default movieDetailsSlice.reducer;