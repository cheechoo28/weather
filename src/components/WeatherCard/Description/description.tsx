import React from "react";
import styles from "./description.module.scss";
import { IDescriptionProps } from "./description.props";

export const Description = ({ weather, temperature, humidity, lastUpdate }: IDescriptionProps) => {
  return (
    <div className={styles.paramsContainer}>
      <div className={styles.weatherParam}>
        <span>Weather</span>
        <span>{weather}</span>
      </div>
      <div className={styles.weatherParam}>
        <span>Temperature</span>
        <span>{Math.round(temperature)} °C</span>
      </div>
      <div className={styles.weatherParam}>
        <span>Humidity</span>
        <span>{humidity} %</span>
      </div>
      <div className={styles.updateInfo}>
        <span>{lastUpdate}</span>
      </div>
    </div>
  );
};
