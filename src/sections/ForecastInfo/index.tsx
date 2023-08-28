import React, { useEffect } from "react";
import styles from "./ForecastInfo.module.scss";
import EmptyForecast from "../../components/EmptyForecast";
import LocationForecast from "../../components/LocationForecast";
import LocationSearchInput from "../../components/LocationSearchInput";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Weather } from "../../store/features/weather/types";
import { fetchWeather } from "../../store/features/weather/fetchWeather";

function ForecastInfo(): JSX.Element {

  const currentWeather: Weather | null = useAppSelector((state) => state.weather.currentWeather);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchWeather({ lat: 43, lon: 76 }))
  }, [dispatch]);

  return (
    <div>
      <LocationSearchInput />
      <section className={styles.location_info}>
        {currentWeather === null ? <EmptyForecast /> : <LocationForecast />}
      </section>
    </div>

  );
}

export default ForecastInfo;
