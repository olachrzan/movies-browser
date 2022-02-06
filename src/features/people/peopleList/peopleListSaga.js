import { takeLatest, call, put, delay } from "redux-saga/effects";
import { getApi } from "../../getApi";
import { fetchPeople, setPeople, setPage, setError } from "./peopleListSlice";
import { apiUrlPopularPeople } from "../../apiData";

function* fetchPeopleListHandler() {
    try {
        yield delay(1000);
        const people = yield call(getApi, apiUrlPopularPeople);
        yield put(setPeople(people.results));
        yield put(setPage(people.page));
    }
    catch (error) {
        yield put(setError())
    }
};

function* peopleListSaga() {
    yield takeLatest(fetchPeople.type, fetchPeopleListHandler);
};

export default peopleListSaga;
