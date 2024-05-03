import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    addJobs(state, action) {
      return [...state, ...action.payload];
    },
    filterJobs(state, action) {
      const { search, location, role, experience, basePay } = action.payload;
      return state.filter(job => {
        const companyNameMatch = job.companyName.includes(search);
        const locationMatch = location === '' || job.location.includes(location);
        const roleMatch = role === '' || job.jobRole.includes(role);
        const experienceMatch = experience === '' || job.minExp == experience;
        const basePayMatch = basePay === '' || job.minJdSalary.includes(basePay);
        console.log(companyNameMatch, locationMatch, roleMatch, experienceMatch, basePayMatch);
        return companyNameMatch && locationMatch && roleMatch && experienceMatch && basePayMatch;
        
      });
    },
  },
});

export const { addJobs, filterJobs } = jobsSlice.actions;
export default jobsSlice.reducer;