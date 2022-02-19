import { call, put, takeLatest, delay } from "redux-saga/effects";
import { getApi } from "../../getApi";
import {
  fetchPeople,
  setPeople,
  setError,
  setTotalPage
} from "./peopleListSlice";
import { apiUrlPopularPeople, apiUrlSearchPeople } from "../../apiData";
import { setTotalResults } from "./peopleListSlice";

function* fetchPeopleListHandler({ payload: { page, query } }) {
  try {
    yield delay(500);
    const people = yield call(getApi, !query
      ? apiUrlPopularPeople + page
      : `${apiUrlSearchPeople}&query=${query}&page=${page}`);
    yield put(setPeople(people.results));
    yield put(setTotalResults(people.total_results));
    yield put(setTotalPage(people.total_pages));
  }
  catch (error) {
    yield put(setError())
  }
};

function* peopleListSaga() {
  yield takeLatest(fetchPeople.type, fetchPeopleListHandler);
};

export default peopleListSaga;