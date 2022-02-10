import { takeLatest, call, put } from "redux-saga/effects";
import { getApi } from "../getApi";
import { apiUrl, apiKey } from "../apiData";
import {
  fetchMovieDetails,
  setMoviesDetails,
  setCast,
  setCrew,
  setError,
} from "./movieDetailsSlice";

function* fetchMovieDetailsHandler() {
  const movie = `${apiUrl}movie/157336?api_key=${apiKey}`; // here we have to enter movie id
  const credits = `${apiUrl}movie/157336/credits?api_key=${apiKey}`// here we have to enter movie id

  try {
    const movieDetails = yield call(getApi, movie);
    yield put(setMoviesDetails(movieDetails));
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