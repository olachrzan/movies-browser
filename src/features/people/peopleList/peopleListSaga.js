import { call, put, takeLatest, delay } from "redux-saga/effects";
import { getApi } from "../../getApi";
import {
  fetchPeople,
  fetchPeopleSuccess,
  fetchPeopleFailure,
} from "./peopleListSlice";
import { apiUrlPopularPeople, apiUrlSearchPeople } from "../../apiData";

function* fetchPeopleListHandler({ payload: { page, query } }) {
  try {
    yield delay(500);
    const people = yield call(getApi, !query
      ? apiUrlPopularPeople + page
      : `${apiUrlSearchPeople}&query=${query}&page=${page}`
    );
    yield put(fetchPeopleSuccess(people));
  }
  catch (error) {
    yield put(fetchPeopleFailure())
  }
};

function* peopleListSaga() {
  yield takeLatest(fetchPeople.type, fetchPeopleListHandler);
};

export default peopleListSaga;