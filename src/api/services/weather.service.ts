import { AxiosResponse } from "axios";

import http from "../http_axios";
import env from "../../utils/config/env.config";
import { Weather } from "../../store/features/weather/types";

const url = `${env.weatherApiUrl}`;

class WeatherService {
  getWeatherByLocation(
    lat: number,
    lon: number,
    timezone: string,
  ): Promise<AxiosResponse<Weather>> {
    const res = http.get<Weather>(
      `${url}`,
      {
        params: {
          latitude: lat,
          longitude: lon,
          timezone,
          daily: "weathercode,temperature_2m_max,temperature_2m_min"
        }
      }
    );
    return res;
  }
}

export default new WeatherService();
