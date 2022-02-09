import { createSlice } from "@reduxjs/toolkit";

const moviesListSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: [],
        genres: [],
        page: 1,
        total_pages: 500,
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
        },
        setPage: (state, { payload: page }) => {
            state.page = page;
        },
        setGenres: (state, { payload: genresApi }) => {
            state.genres = genresApi;
        },
    },
});

export const {
    fetchMovies,
    setMovies,
    setError,
    setPage,
    setGenres,
} = moviesListSlice.actions;

const selectMoviesState = state => state.movies;

export const selectMovies = state => selectMoviesState(state).movies;
export const selectLoading = state => selectMoviesState(state).loading;
export const selectError = state => selectMoviesState(state).error;
export const selectPage = state => selectMoviesState(state).page;
export const selectGenres = state => selectMoviesState(state).genres;
export const selectTotalPages = state => selectMoviesState(state).total_pages;

export default moviesListSlice.reducer;