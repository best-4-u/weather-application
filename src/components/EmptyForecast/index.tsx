import React from "react";
import styles from "./EmptyForecast.module.scss";

export default function EmptyForecast() {

  return (
    <div className={styles.empty_forecast}>
      <img src="/weather_icon.png" alt="Main logo" width={150} height={150} />
      <section>
        <h2> Welcome to MY FORECAST page! </h2>
        <p> You can easily check the weather forecast for any locationin the World.
         Just search for it or select location from your favourite list.
        </p>
      </section>
    </div>
  );
}
