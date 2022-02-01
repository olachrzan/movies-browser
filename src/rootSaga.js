import { all } from "redux-saga/effects";
import movieListSaga from "./features/movies/MovieList/movieListSaga";
import movieDetailsSaga from "./features/movies/movieDetailsSaga";

export default function* rootSaga() {
    yield all([
        movieListSaga(),
        movieDetailsSaga()
    ]);
};