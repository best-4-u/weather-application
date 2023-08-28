import { createSlice } from "@reduxjs/toolkit";
import { WeatherState } from "./types";
import { fetchWeather } from "./fetchWeather";
import type { RootState } from '../../store';

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

export const selectWeather = (state: RootState) => state.weather.currentWeather;
export const selectWeatherStatus = (state: RootState) => state.weather.status;

export default weatherSlice.reducer;
