import { call, put, delay, select, debounce, takeLatest } from "redux-saga/effects";
import { getApi } from "../../getApi";
import {
  fetchMovies,
  setMovies,
  setError,
  setGenres,
  selectPage,
  setTotalMoviesPages,
  setTotalResults,
} from "./movieListSlice";
import { apiUrlGenres, apiUrlPopularMovies, apiKey, apiUrl } from "../../apiData";

function* fetchMovieListHandler({ payload: { query } }) {

  try {
    const currentPage = yield select(selectPage);
    const apiRequest = yield call(getApi, !query
      ? apiUrlPopularMovies + currentPage
      : `${apiUrl}search/movie?&api_key=${apiKey}&query=${query}&page=${currentPage}`);
    const genres = yield call(getApi, apiUrlGenres);
    console.log(apiRequest);
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
  yield debounce(1000, fetchMovies.type, fetchMovieListHandler);
  // yield takeLatest(setPage.type, fetchMovieListHandler);
};

export default movieListSaga;