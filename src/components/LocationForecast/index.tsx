import React, { useMemo } from "react";
import styles from "./LocationForecast.module.scss";
import DailyForecastCard from "../DailyForecastCard";
import { useAppSelector } from "../../store/hooks";
import { DailyWeatherCard, Weather } from "../../store/features/weather/types";
import { Location } from "../../store/features/locations/types";

function LocationForecast(): JSX.Element {
  const weather: Weather | null = useAppSelector(
    (state) => state.weather.currentWeather
  );
  const selectedLocation: Location | null = useAppSelector(
    (state) => state.locations.selectedLocation
  );

  const cards = useMemo(() => {
    const res: DailyWeatherCard[] = [];
    if (weather === null) {
      return [];
    }

    for (let i = 0; i < 5; i++) {
      res.push({
        min: weather.daily.temperature_2m_min[i],
        max: weather.daily.temperature_2m_max[i],
        date: weather.daily.time[i],
        weatherCode: weather.daily.weathercode[i],
      });
    }

    return res;
  }, [weather]);

  return (
    <div className={styles.location_forecast}>
      <div className={styles.location_header}>
        <h3> {`${selectedLocation?.name} (${selectedLocation?.country})`} </h3>
        <button type="button"> Add to favourites </button>
      </div>
      <div className={styles.coordinates}>
        <p>
          {" "}
          Latitude: <span> {selectedLocation?.latitude}</span>, Longitude{" "}
          <span> {selectedLocation?.longitude} </span>{" "}
        </p>
      </div>
      <div className={styles.cards_container}>
        {cards.map((card) => (
          <DailyForecastCard
            key={card.date}
            date={card.date}
            min={card.min}
            max={card.max}
            weatherCode={card.weatherCode}
          />
        ))}
      </div>
    </div>
  );
}

export default LocationForecast;
