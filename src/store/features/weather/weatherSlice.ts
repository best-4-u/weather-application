import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { Weather } from "./types";
import { fetchWeather } from "./fetchWeather";

interface WeatherState {
  currentWeather: Weather | null;
  status: "idle" | "loading" | "loaded";
  error: string | null;
}

const initialState: WeatherState = {
  currentWeather: null,
  status: "idle",
  error: null
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setWeather: (state, action: PayloadAction<Weather>) => {
      state.currentWeather = action.payload;
    },
  },
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

export const { setWeather } = weatherSlice.actions;

export default weatherSlice.reducer;
