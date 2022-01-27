import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";
import movieListReducer from "./features/movies/MoviesList/movieListSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        movies: movieListReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;