import { createSlice } from "@reduxjs/toolkit";

const peopleListSlice = createSlice({
  name: 'people',
  initialState: {
    people: [],
    loading: true,
    error: false,
    totalPage: 500,
    total_results: '',
  },
  reducers: {
    fetchPeople: (state) => {
      state.loading = true;
      state.page = 1;
    },
    setPeople: (state, { payload: peopleApi }) => {
      state.people = peopleApi;
      state.loading = false;
    },
    setError: state => {
      state.error = true;
      state.loading = false;
    },
    setTotalPage: (state, { payload: totalPages }) => {
      state.totalPage = totalPages;
    },
    setTotalResults: (state, { payload: totalResults }) => {
      state.total_results = totalResults;
    },
  },
});

export const {
  fetchPeople,
  setPeople,
  setError,
  setTotalPage,
  setTotalResults,
} = peopleListSlice.actions;

const selectPeopleListState = state => state.people;

export const selectPeopleList = state => selectPeopleListState(state).people;
export const selectPeopleLoading = state => selectPeopleListState(state).loading;
export const selectPeopleError = state => selectPeopleListState(state).error;
export const selectPeopleTotalPage = state => selectPeopleListState(state).totalPage;
export const selectTotalResults = state => selectPeopleListState(state).total_results;

export default peopleListSlice.reducer;