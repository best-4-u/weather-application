import { AxiosResponse } from "axios";

import http from "../http_axios";
import env from "../../utils/config/env.config";
import { Weather } from "../../store/features/weather/types";

const url = `${env.weatherApiUrl}`;

class WeatherService {
  getWeatherByLocation(
    lat: number,
    lon: number,
  ): Promise<AxiosResponse<Weather>> {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const res = http.get<Weather>(
      `${url}?latitude=${lat}&longitude=${lon}&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=${timezone}`
    );
    return res;
  }
}

export default new WeatherService();
