import { all } from "redux-saga/effects";
import movieListSaga from "./features/movies/MoviesList/movieListSaga";
import movieDetailsSaga from "./features/movies/MovieDetails/movieDetailsSaga";
import peopleListSaga from "./features/people/peopleList/peopleListSaga";

export default function* rootSaga() {
    yield all([
        movieDetailsSaga(),
        movieListSaga(),
        peopleListSaga()
    ]);
};