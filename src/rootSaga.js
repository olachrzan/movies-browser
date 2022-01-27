import { all } from "redux-saga/effects";
import movieListSaga from "./features/movies/MoviesList/movieListSaga";

export default function* rootSaga() {
    yield all([
        movieListSaga(),
    ]);
};