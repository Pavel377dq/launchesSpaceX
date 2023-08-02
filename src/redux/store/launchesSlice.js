import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { api } from "../../API/Api";

export const getLaunches = createAsyncThunk(
  "launches/getLaunches",
  async (_, { rejectWithValue }) => {
    try {
      const data = await api.getLaunches();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  launches: [],
  isLoading: false,
  error: null,
};

export const launchesSlice = createSlice({
  name: "launches",
  initialState,
  reducers: {
    increase: (state) => {
      state.launches = state.launches.sort((a, b) => {
        return Number(a.date_utc.slice(0, 4)) - Number(b.date_utc.slice(0, 4));
      });
    },
    decrease: (state) => {
      state.launches = state.launches.sort((a, b) => {
        return Number(b.date_utc.slice(0, 4)) - Number(a.date_utc.slice(0, 4));
      });
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getLaunches.pending, (state) => {
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(getLaunches.fulfilled, (state, action) => {
      state.launches.push(
        ...action.payload.filter((launch) => {
          const { date_utc, success } = launch;
          const dateNumber = Number(date_utc.slice(0, 4));
          return dateNumber >= 2015 && dateNumber <= 2019 && success;
        })
      );

      state.isLoading = false;
    });
    builder.addCase(getLaunches.rejected, (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    });
  },
});

export const { increase, decrease } = launchesSlice.actions;

export const selectServerErrors = (state) => state.launches.error;
export const selectIsLoading = (state) => state.launches.isLoading;
export const selectLaunches = (state) => state.launches.launches;

export default launchesSlice.reducer;
