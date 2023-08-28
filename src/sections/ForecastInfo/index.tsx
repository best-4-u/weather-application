import React from "react";
import styles from "./ForecastInfo.module.scss";
import EmptyForecast from "../../components/EmptyForecast";
import LocationForecast from "../../components/LocationForecast";
import LocationSearchInput from "../../components/LocationSearchInput";
import { useAppSelector } from "../../store/hooks";
import FavouriteListSelect from "../../components/FavouriteListSelect";
import { Location } from "../../store/features/locations/types";
import { selectSelectedLocation } from "../../store/features/locations/locationsSlice";

function ForecastInfo(): JSX.Element {
  const selectedLocation: Location | null = useAppSelector(selectSelectedLocation);

  return (
    <div className={styles.forecast_info}>
      <div className={styles.actions}>
        <LocationSearchInput />
        <FavouriteListSelect />
      </div>

      <section className={styles.location_info}>
        {selectedLocation === null ? <EmptyForecast /> : <LocationForecast />}
      </section>
    </div>
  );
}

export default ForecastInfo;
