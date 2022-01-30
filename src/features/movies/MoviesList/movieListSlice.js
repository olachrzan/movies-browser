import { createSlice } from "@reduxjs/toolkit";

const moviesListSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: [],
        genres: [],
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
        setGenres: (state, { payload: genresApi }) => {
            state.genres = genresApi;
        },
        findGenresId: (state, { payload: id }) => {
            state.id = id
        },
    },
});

export const {
    fetchMovies,
    setMovies,
    setError,
    setTotalPages,
    setGenres,
} = moviesListSlice.actions;

const selectMoviesState = state => state.movies;

export const selectMovies = state => selectMoviesState(state).movies;
export const selectLoading = state => selectMoviesState(state).loading;
export const selectError = state => selectMoviesState(state).error;
export const selectTotalPages = state => selectMoviesState(state).total_pages;
export const selectGenres = state => selectMoviesState(state).genres;

export default moviesListSlice.reducer;