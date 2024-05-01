import { createSlice } from '@reduxjs/toolkit';


const initialState = [];

const jobsSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {
        addJobs(state, action) {
            return [...state,...action.payload];
        },
        filterJobs(state, action) {
            return state.filter(job => job.title.includes(action.payload));
        }
    },

});

export const { addJobs, filterJobs } = jobsSlice.actions;
export default jobsSlice.reducer;   