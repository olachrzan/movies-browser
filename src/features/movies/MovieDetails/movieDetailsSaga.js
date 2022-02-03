import { takeLatest, call, put, delay } from "redux-saga/effects";
import { getApi } from "../../getApi";
import { apiUrl, apiKey } from "../../apiData";
import {
    fetchMovieDetails,
    setMovieDetails,
    setCast,
    setCrew,
    setError,
} from "./movieDetailsSlice";

function* fetchMovieDetailsHandler({ payload: { id } }) {
    const movie = `${apiUrl}movie/${id}?api_key=${apiKey}`;
    const credits = `${apiUrl}movie/${id}/credits?api_key=${apiKey}`;

    try {
        yield delay(1000);
        const movieDetails = yield call(getApi, movie);
        yield put(setMovieDetails(movieDetails));
        const creditsDetails = yield call(getApi, credits);
        yield put(setCast(creditsDetails.cast));
        yield put(setCrew(creditsDetails.crew));
    }
    catch (error) {
        yield put(setError());
        console.error(error);
    }
};

function* movieDetailsSaga() {
    yield takeLatest(fetchMovieDetails.type, fetchMovieDetailsHandler);
};

export default movieDetailsSaga;