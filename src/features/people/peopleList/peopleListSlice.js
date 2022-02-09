import { createSlice } from "@reduxjs/toolkit";

const peopleListSlice = createSlice({
    name: 'people',
    initialState: {
        people: [],
        page: 1,
        loading: false,
        error: false,
        totalPage: 500,
    },
    reducers: {
        fetchPeople: state => {
            state.loading = !state.loading;
        },
        setPeople: (state, { payload: peopleApi }) => {
            state.people = peopleApi;
            state.loading = false;
        },
        setError: state => {
            state.error = true;
            state.loading = false;
        },
        setPage: (state, { payload: page }) => {
            state.page = page;
        },
    },
});

export const {
    fetchPeople,
    setPeople,
    setError,
    setPage,
} = peopleListSlice.actions;

const selectPeopleListState = state => state.people;

export const selectPeopleList = state => selectPeopleListState(state).people;
export const selectPeoplePage = state => selectPeopleListState(state).page;
export const selectPeopleLoading = state => selectPeopleListState(state).loading;
export const selectPeopleError = state => selectPeopleListState(state).error;
export const selectPeopleTotalPage = state => selectPeopleListState(state).totalPage;

export default peopleListSlice.reducer;