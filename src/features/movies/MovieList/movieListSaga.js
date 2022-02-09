import { takeLatest, call, put, delay, select } from "redux-saga/effects";
import { getApi } from "../../getApi";
import {
    fetchMovies,
    setMovies,
    setError,
    setPage,
    setGenres,
    selectPage,
} from "./movieListSlice";
import { apiUrlGenres, apiUrlPopularMovies } from "../../apiData";

function* fetchMovieListHandler() {

    try {
        yield delay(1000);
        const currentPage = yield select(selectPage);
        const apiRequest = yield call(getApi, apiUrlPopularMovies + currentPage);
        const genres = yield call(getApi, apiUrlGenres);
        yield put(setMovies(apiRequest.results));
        yield put(setGenres(genres.genres));
    }
    catch (error) {
        yield put(setError());
        console.error(error);
    }
};

function* movieListSaga() {
    yield takeLatest(fetchMovies.type, fetchMovieListHandler);
    yield takeLatest(setPage.type, fetchMovieListHandler);
};

export default movieListSaga;