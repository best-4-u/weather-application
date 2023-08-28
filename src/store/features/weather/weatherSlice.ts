import { createSlice } from "@reduxjs/toolkit";
import { WeatherState } from "./types";
import { fetchWeather } from "./fetchWeather";

const initialState: WeatherState = {
  currentWeather: null,
  status: "idle",
  error: null,
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchWeather.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });

    builder.addCase(fetchWeather.fulfilled, (state, { payload }) => {
      state.currentWeather = payload;
      state.status = "loaded";
    });
  },
});

export default weatherSlice.reducer;
