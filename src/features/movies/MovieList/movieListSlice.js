import { createSlice } from "@reduxjs/toolkit";

const moviesListSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: [],
        genres: [],
        page: 1,
        total_pages: 500,
        loading: true,
        error: false,
    },
    reducers: {
        fetchMovies: () => { },
        setMovies: (state, { payload: moviesFromApi }) => {
            state.movies = moviesFromApi;
            state.loading = false;
        },
        setError: state => {
            state.error = true;
            state.loading = false;
        },
        setPage: (state, { payload: currentPage }) => {
            state.page = currentPage;
            state.loading = true;
            window.scrollTo(0, 0);
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