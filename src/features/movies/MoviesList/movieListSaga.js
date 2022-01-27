import { takeLatest, call, put, delay } from "redux-saga/effects";
import { getApi } from "../../../getApi";
import { fetchMovies, setMovies, setError, setTotalPages } from "./movieListSlice";

function* fetchMovieListHandler() {
    const apiUrl = "https://api.themoviedb.org/3/movie/popular?api_key=65f0040ec23653aeaba018e96e0fe430";

    try {
        yield delay(2000);
        const apiRequest = yield call(getApi, apiUrl);
        console.log(apiRequest);
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