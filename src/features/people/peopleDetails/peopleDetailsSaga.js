import { takeLatest, call, put, delay } from "redux-saga/effects";
import { getApi } from "../../getApi";
import { apiUrl, apiKey } from "../../apiData";
import {
  fetchPeopleDetails,
  setPeopleDetails,
  setCast,
  setCrew,
  setError,
} from "./peopleDetailsSlice";

function* fetchPeopleDetailsHandler({ payload: { id } }) {
  const person = `${apiUrl}person/${id}?api_key=${apiKey}`;
  const credits = `${apiUrl}person/${id}/movie_credits?api_key=${apiKey}`;

  try {
    yield delay(500);
    const peopleDetails = yield call(getApi, person);
    yield put(setPeopleDetails(peopleDetails));
    const creditsDetails = yield call(getApi, credits);
    yield put(setCast(creditsDetails.cast));
    yield put(setCrew(creditsDetails.crew));
  }
  catch (error) {
    yield put(setError());
    console.error(error)
  }
};

function* peopleDetailsSaga() {
  yield takeLatest(fetchPeopleDetails.type, fetchPeopleDetailsHandler);
};

export default peopleDetailsSaga;