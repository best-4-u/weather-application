import React from "react";
import styles from "./ForecastInfo.module.scss";
import EmptyForecast from "../../components/EmptyForecast";
import LocationForecast from "../../components/LocationForecast";
import LocationSearchInput from "../../components/LocationSearchInput";
import { useAppSelector } from "../../store/hooks";
import { Weather } from "../../store/features/weather/types";

function ForecastInfo(): JSX.Element {

  const currentWeather: Weather | null = useAppSelector((state) => state.weather.currentWeather);

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
