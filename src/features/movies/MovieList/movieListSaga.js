import { call, put, takeLatest, delay } from "redux-saga/effects";
import { getApi } from "../../getApi";
import {
  fetchMovies,
  setMovies,
  setError,
  setGenres,
  setTotalMoviesPages,
  setTotalResults,
} from "./movieListSlice";
import { apiUrlGenres, apiUrlPopularMovies, apiUrlSearchMovies } from "../../apiData";

function* fetchMovieListHandler({ payload: { page, query } }) {
  try {
    yield delay(500);
    const apiRequest = yield call(getApi, !query
      ? apiUrlPopularMovies + page
      : `${apiUrlSearchMovies}&query=${query}&page=${page}`);
    const genres = yield call(getApi, apiUrlGenres);
    yield put(setTotalMoviesPages(apiRequest.total_pages));
    yield put(setTotalResults(apiRequest.total_results));
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
};

export default movieListSaga;