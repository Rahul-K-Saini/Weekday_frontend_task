import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { filterJobs } from "../store/slices/jobs";

const Filters = () => {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({
    role: "",
    location: "",
    experience: "",
    basePay: "",
    search: "",
  });

  const handleFilterChange = (event, filterType) => {
    const value = event.target.value;
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters, [filterType]: value };
      console.log(updatedFilters);
      dispatch(filterJobs(updatedFilters));
      return updatedFilters;
    });
  };

  const renderSelectOptions = (options) => {
    return options.map((option) => (
      <MenuItem key={option} value={option}>
        {option.charAt(0).toUpperCase() + option.slice(1)}
      </MenuItem>
    ));
  };

  return (
    <div
      className="filters-container"
      style={{
        display: "flex",
        gap: "16px",
        marginBottom: "16px",
        marginTop: "16px",
      }}
    >
      <FormControl fullWidth>
        <InputLabel id="roles-label">Roles</InputLabel>
        <Select
          labelId="roles-label"
          label="Roles"
          value={filters.role}
          onChange={(event) => handleFilterChange(event, "role")}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {renderSelectOptions([
            "frontend",
            "ios",
            "android",
            "tech lead",
            "backend",
          ])}
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="locations-label">Remote</InputLabel>
        <Select
          labelId="locations-label"
          label="Remote"
          value={filters.location}
          onChange={(event) => handleFilterChange(event, "location")}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {renderSelectOptions([
            "delhi ncr",
            "remote",
            "mumbai",
            "chennai",
            "bangalore",
          ])}
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="experience-label">Experience</InputLabel>
        <Select
          labelId="experience-label"
          label="Experience"
          value={filters.experience}
          onChange={(event) => handleFilterChange(event, "experience")}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
          <MenuItem value="4">4</MenuItem>
          <MenuItem value="5">5</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="basePay-label">Minimum Base Pay Salary</InputLabel>
        <Select
          labelId="basePay-label"
          label="Minimum Base Pay Salary"
          value={filters.basePay}
          onChange={(event) => handleFilterChange(event, "basePay")}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="5LPA">5LPA</MenuItem>
          <MenuItem value="10LPA">10LPA</MenuItem>
          <MenuItem value="20LPA">20LPA</MenuItem>
          <MenuItem value="30LPA">30LPA</MenuItem>
          <MenuItem value="50LPA">50LPA</MenuItem>
        </Select>
      </FormControl>

      <TextField
        fullWidth
        id="outlined-basic"
        label="Search Company Name"
        variant="outlined"
        value={filters.search}
        onChange={(event) => handleFilterChange(event, "search")}
      />
    </div>
  );
};

export default Filters;
