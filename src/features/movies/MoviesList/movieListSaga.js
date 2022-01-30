import { takeLatest, call, put, delay } from "redux-saga/effects";
import { getApi } from "../../getApi";
import {
    fetchMovies,
    setMovies,
    setError,
    setTotalPages
} from "./movieListSlice";
import { apiUrlPopularMovies } from "../../apiData";

function* fetchMovieListHandler() {
    const apiUrl = `${apiUrlPopularMovies}`;

    try {
        yield delay(2000);
        const apiRequest = yield call(getApi, apiUrl);
        yield put(setMovies(apiRequest.results));
        yield put(setTotalPages(apiRequest.total_pages));
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