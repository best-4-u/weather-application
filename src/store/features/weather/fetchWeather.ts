import { createAsyncThunk } from "@reduxjs/toolkit";
import weatherService from "../../../api/services/weather.service";
import { Weather } from "./types";

export const fetchWeather = createAsyncThunk<
Weather,
  { lat: number; lon: number }
>(
  "weather/fetchWeather",
  async ({ lat, lon }: { lat: number; lon: number }) => {
    const response = await weatherService.getWeatherByLocation(lat, lon);

    return response.data;
  }
);
