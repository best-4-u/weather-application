import React, { useEffect, useMemo } from "react";
import styles from "./LocationForecast.module.scss";
import DailyForecastCard from "../DailyForecastCard";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { DailyWeatherCard, Weather } from "../../store/features/weather/types";
import { Location } from "../../store/features/locations/types";
import {
  addToFavouriteList,
  removeFromFavouriteList,
} from "../../store/features/locations/locationsSlice";
import { fetchWeather } from "../../store/features/weather/fetchWeather";

function LocationForecast(): JSX.Element {
  const weather: Weather | null = useAppSelector(
    (state) => state.weather.currentWeather
  );
  const selectedLocation: Location | null = useAppSelector(
    (state) => state.locations.selectedLocation
  );
  const favouriteLocations: Location[] = useAppSelector(
    (state) => state.locations.favouriteList
  );

  const isInFavouriteList = useMemo(
    () =>
      favouriteLocations.findIndex(
        (location) => location.id === selectedLocation?.id
      ) >= 0,
    [selectedLocation, favouriteLocations]
  );

  const dispatch = useAppDispatch();

  const handleClick = () => {
    if (selectedLocation === null) {
      return;
    }
    if (isInFavouriteList) {
      dispatch(removeFromFavouriteList(selectedLocation.id));
    } else {
      dispatch(addToFavouriteList(selectedLocation));
    }
  };

  useEffect(() => {
    if (selectedLocation !== null) {
      dispatch(
        fetchWeather({
          lat: selectedLocation.latitude,
          lon: selectedLocation.longitude,
          timezone: selectedLocation.timezone,
        })
      );
    }
  }, [selectedLocation, dispatch]);

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
        <button
          type="button"
          onClick={handleClick}
          className={styles.add_to_favourites_btn}
        >
          {!isInFavouriteList ? "Add to favourites" : "Remove from favourites"}
        </button>
      </div>
      <div className={styles.coordinates}>
        <p>
          Latitude: <span> {selectedLocation?.latitude}</span>, Longitude
          <span> {selectedLocation?.longitude} </span>
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
