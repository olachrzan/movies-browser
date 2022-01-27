import { createSlice } from "@reduxjs/toolkit";

const moviesListSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: [],
        page: 1,
        total_pages: "loading",
        loading: false,
        error: false,
    },
    reducers: {
        fetchMovies: state => {
            state.loading = !state.loading;
        },
        setMovies: (state, { payload: moviesFromApi }) => {
            state.movies = moviesFromApi;
            state.loading = false;
        },
        setError: state => {
            state.error = true;
            state.loading = false;
            state.total_pages = "...";
        },
        setTotalPages: (state, { payload: allPages }) => {
            state.total_pages = allPages;
        },
    },
});

export const {
    fetchMovies,
    setMovies,
    setError,
    setTotalPages,
} = moviesListSlice.actions;

const selectMoviesState = state => state.movies;

export const selectMovies = state => selectMoviesState(state).movies;
export const selectLoading = state => selectMoviesState(state).loading;
export const selectError = state => selectMoviesState(state).error;
export const selectTotalPages = state => selectMovies(state).total_pages;

export default moviesListSlice.reducer;