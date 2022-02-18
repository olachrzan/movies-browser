import { call, put, delay, debounce } from "redux-saga/effects";
import { getApi } from "../../getApi";
import {
  fetchPeople,
  setPeople,
  setError,
  setTotalPage
} from "./peopleListSlice";
import { apiUrlPopularPeople, apiUrl, apiKey } from "../../apiData";
import { setTotalResults } from "./peopleListSlice";

function* fetchPeopleListHandler({ payload: { page, query } }) {
  try {
    yield delay(1000);
    const people = yield call(getApi, !query
      ? apiUrlPopularPeople + page
      : `${apiUrl}search/person?&api_key=${apiKey}&query=${query}&page=${page}`);
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
};

export default peopleListSaga;