import { createSlice } from "@reduxjs/toolkit";
import {totalPagesForLists} from "../../totalPagesForLists";

const peopleListSlice = createSlice({
  name: 'people',
  initialState: {
    people: [],
    loading: false,
    error: false,
    totalPages: totalPagesForLists,
    totalResults: '',
  },
  reducers: {
    fetchPeople: (state) => {
      state.loading = true;
      state.page = 1;
      state.error = false;
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
      state.totalPages = totalPages;
    },
    setTotalResults: (state, { payload: totalResults }) => {
      state.totalResults = totalResults;
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
export const selectPeopleTotalPage = state => selectPeopleListState(state).totalPages;
export const selectTotalPeopleResults = state => selectPeopleListState(state).totalResults;

export default peopleListSlice.reducer;