import { call, put, takeLatest, delay } from "redux-saga/effects";
import { getApi } from "../../getApi";
import {
  fetchMovies,
  fetchMoviesSuccess,
  fetchMoviesFailure,
  setGenres,
} from "./movieListSlice";
import { apiUrlGenres, apiUrlPopularMovies, apiUrlSearchMovies } from "../../apiData";

function* fetchMovieListHandler({ payload: { page, query } }) {
  try {
    yield delay(500);
    const apiRequest = yield call(getApi, !query
      ? apiUrlPopularMovies + page
      : `${apiUrlSearchMovies}&query=${query}&page=${page}`
    );
    const genres = yield call(getApi, apiUrlGenres);
    yield put(fetchMoviesSuccess(apiRequest));
    yield put(setGenres(genres.genres));
  }
  catch (error) {
    yield put(fetchMoviesFailure());
    console.error(error);
  }
};

function* movieListSaga() {
  yield takeLatest(fetchMovies.type, fetchMovieListHandler);
};

export default movieListSaga;