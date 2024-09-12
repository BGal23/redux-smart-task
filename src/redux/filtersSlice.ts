import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = { status: "" };

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    setFiltersStatus(state, action) {
      return {
        ...state,
        status: action.payload,
      };
    },
  },
});

export const filtersReducer = filtersSlice.reducer;
export const { setFiltersStatus } = filtersSlice.actions;
