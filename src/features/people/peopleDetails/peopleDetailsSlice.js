import { createSlice } from "@reduxjs/toolkit";

const peopleDetailsSlice = createSlice({
    name: 'peopleDetails',
    initialState: {
        peopleDetails: [],
        cast: [],
        crew: [],
        error: false,
    },
    reducers: {
        fetchPeopleDetails: () => { },
        setPeopleDetails: (state, { payload: peopleDetailsApi }) => {
            state.peopleDetails = peopleDetailsApi;
            state.loading = false;
        },
        setCast: (state, { payload: peopleCast }) => {
            state.cast = peopleCast;
        },
        setCrew: (state, { payload: peopleCrew }) => {
            state.crew = peopleCrew
        },
        setError: state => {
            state.error = true;
        },
    },
});

export const {
    fetchPeopleDetails,
    setPeopleDetails,
    setCast,
    setCrew,
    setError,
} = peopleDetailsSlice.actions;

const selectPeopleDetailsState = state => state.peopleDetails;

export const selectPeopleDetails = state => selectPeopleDetailsState(state).peopleDetails;
export const selectPeopleCast = state => selectPeopleDetailsState(state).cast;
export const selectPeopleCrew = state => selectPeopleDetailsState(state).crew;
export const selectError = state => selectPeopleDetailsState(state).error;

export default peopleDetailsSlice.reducer;