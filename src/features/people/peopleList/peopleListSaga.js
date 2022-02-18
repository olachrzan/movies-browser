import { call, put, delay, select, debounce } from "redux-saga/effects";
import { getApi } from "../../getApi";
import {
  fetchPeople,
  setPeople,
  setPeoplePage,
  setError,
  selectPeoplePage,
  setTotalPage
} from "./peopleListSlice";
import { apiUrlPopularPeople, apiUrl, apiKey } from "../../apiData";
import { setTotalResults } from "./peopleListSlice";

function* fetchPeopleListHandler({ payload: { query } }) {
  try {
    yield delay(1000);
    const currentPage = yield select(selectPeoplePage);
    const people = yield call(getApi, !query
      ? apiUrlPopularPeople + currentPage
      : `${apiUrl}search/person?&api_key=${apiKey}&query=${query}&page=${currentPage}`);
    console.log(people);
    yield put(setPeople(people.results));
    yield put(setTotalResults(people.total_results));
    yield put(setTotalPage(people.total_pages))
  }
  catch (error) {
    yield put(setError())
  }
};

function* peopleListSaga() {
  yield debounce(1000, fetchPeople.type, fetchPeopleListHandler);
  yield debounce(1000, setPeoplePage.type, fetchPeopleListHandler);
};

export default peopleListSaga;