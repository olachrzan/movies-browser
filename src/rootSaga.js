import { all } from "redux-saga/effects";
import movieListSaga from "./features/movies/MoviesList/movieListSaga";
import movieDetailsSaga from "./features/movies/MovieDetails/movieDetailsSaga";

export default function* rootSaga() {
    yield all([
        movieListSaga(),
        movieDetailsSaga()
    ]);
};