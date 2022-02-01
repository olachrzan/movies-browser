import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";
import movieListReducer from "./features/movies/MoviesList/movieListSlice";
import movieDetailsReducer from "./features/movies/MovieDetails/movieDetailsSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        movies: movieListReducer,
        moviesDetails: movieDetailsReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;