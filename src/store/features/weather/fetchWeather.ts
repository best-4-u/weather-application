import { createAsyncThunk } from "@reduxjs/toolkit";
import weatherService from "../../../api/services/weather.service";
import { Weather } from "./types";

export const fetchWeather = createAsyncThunk<
  Weather,
  { lat: number; lon: number; timezone: string; }
>(
  "weather/fetchWeather",
  async ({ lat, lon, timezone }: { lat: number; lon: number; timezone: string; }) => {
    const response = await weatherService.getWeatherByLocation(lat, lon, timezone);

    return response.data;
  }
);
