import { takeLatest, call, put, delay, select } from "redux-saga/effects";
import { getApi } from "../../getApi";
import {
  fetchPeople,
  setPeople,
  setPeoplePage,
  setError,
  selectPeoplePage
} from "./peopleListSlice";
import { apiUrlPopularPeople } from "../../apiData";

function* fetchPeopleListHandler() {
  try {
    yield delay(1000);
    const currentPage = yield select(selectPeoplePage);
    const people = yield call(getApi, apiUrlPopularPeople + currentPage);
    yield put(setPeople(people.results));
  }
  catch (error) {
    yield put(setError())
  }
};

function* peopleListSaga() {
  yield takeLatest(fetchPeople.type, fetchPeopleListHandler);
  yield takeLatest(setPeoplePage.type, fetchPeopleListHandler);
};

export default peopleListSaga;