import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";
import movieDetailsReducer from "./features/movies/MovieDetails/movieDetailsSlice";
import movieListReducer from "./features/movies/MovieList/movieListSlice";
import peopleListReducer from "./features/people/peopleList/peopleListSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    moviesDetails: movieDetailsReducer,
    movies: movieListReducer,
    people: peopleListReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;