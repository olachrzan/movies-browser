import { createSlice } from "@reduxjs/toolkit";
import { totalPagesForLists } from "../../totalPagesForLists";

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
      state.error = false;
    },
    fetchPeopleSuccess: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.people = payload.results;
      state.totalPages = payload.total_pages;
      state.totalResults = payload.total_results;
      window.scrollTo(0, 0);
    },
    fetchPeopleFailure: state => {
      state.error = true;
      state.loading = false;
    },
  },
});

export const {
  fetchPeople,
  fetchPeopleSuccess,
  fetchPeopleFailure,
} = peopleListSlice.actions;

const selectPeopleListState = state => state.people;

export const selectPeopleList = state => selectPeopleListState(state).people;
export const selectPeopleLoading = state => selectPeopleListState(state).loading;
export const selectPeopleError = state => selectPeopleListState(state).error;
export const selectPeopleTotalPage = state => selectPeopleListState(state).totalPages;
export const selectTotalPeopleResults = state => selectPeopleListState(state).totalResults;

export default peopleListSlice.reducer;