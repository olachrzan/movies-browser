import { takeLatest, call, put, delay } from "redux-saga/effects";
import { getApi } from "../../getApi";
import {
    fetchMovies,
    setMovies,
    setError,
    setPage,
    setGenres,
} from "./movieListSlice";
import { apiUrlGenres, apiUrlPopularMovies } from "../../apiData";

function* fetchMovieListHandler() {

    try {
        yield delay(1000);
        const apiRequest = yield call(getApi, apiUrlPopularMovies);
        const genres = yield call(getApi, apiUrlGenres);
        yield put(setMovies(apiRequest.results));
        yield put(setPage(apiRequest.page));
        yield put(setGenres(genres.genres));
    }
    catch (error) {
        yield put(setError());
        console.error(error);
    }
};

function* movieListSaga() {
    yield takeLatest(fetchMovies.type, fetchMovieListHandler);
};

export default movieListSaga;