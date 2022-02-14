import { createSlice } from "@reduxjs/toolkit";

const peopleListSlice = createSlice({
  name: 'people',
  initialState: {
    people: [],
    page: 1,
    loading: true,
    error: false,
    totalPage: 500,
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
    setPeoplePage: (state, { payload: currentPage }) => {
      state.page = currentPage;
      state.loading = true;
      window.scrollTo(0, 0);
    },
    setTotalPage: (state, { payload: totalPages }) => {
      state.totalPage = totalPages
    },
  },
});

export const {
  fetchPeople,
  setPeople,
  setError,
  setPeoplePage,
  setTotalPage,
} = peopleListSlice.actions;

const selectPeopleListState = state => state.people;

export const selectPeopleList = state => selectPeopleListState(state).people;
export const selectPeoplePage = state => selectPeopleListState(state).page;
export const selectPeopleLoading = state => selectPeopleListState(state).loading;
export const selectPeopleError = state => selectPeopleListState(state).error;
export const selectPeopleTotalPage = state => selectPeopleListState(state).totalPage;

// export const selectPeopleByQuery = (state, query) => {
//   const people = selectPeopleList(state);

//   if (!query || query.trim() === "") {
//     return people;
//   }
//   return people.find(({ name }) => name.toUpperCase().includes(query.trim().toUpperCase()));
// };

export default peopleListSlice.reducer;