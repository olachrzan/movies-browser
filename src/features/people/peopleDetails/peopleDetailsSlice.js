import { createSlice } from "@reduxjs/toolkit";

const peopleDetailsSlice = createSlice({
  name: 'peopleDetails',
  initialState: {
    peopleDetails: [],
    cast: [],
    crew: [],
    loading: false,
    error: false,
  },
  reducers: {
    fetchPeopleDetails: state => {
      state.loading = true;
    },
    setPeopleDetails: (state, { payload: peopleDetailsApi }) => {
      state.peopleDetails = peopleDetailsApi;
      state.loading = false;
    },
    setMovies: (state, { payload }) => {
      state.cast = payload.cast;
      state.crew = payload.crew;
    },
    setError: state => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchPeopleDetails,
  setPeopleDetails,
  setMovies,
  setError,
} = peopleDetailsSlice.actions;

const selectPeopleDetailsState = state => state.peopleDetails;

export const selectPeopleDetails = state => selectPeopleDetailsState(state).peopleDetails;
export const selectPeopleCast = state => selectPeopleDetailsState(state).cast;
export const selectPeopleCrew = state => selectPeopleDetailsState(state).crew;
export const selectLoading = state => selectPeopleDetailsState(state).loading;
export const selectError = state => selectPeopleDetailsState(state).error;

export default peopleDetailsSlice.reducer;