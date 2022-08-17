import React from "react";
import { Htag } from "../../components/Htag/Htag";
import styles from "./LocationWeatherCard.module.scss";

const LocationWeatherCard = () => {
  return (
    <div className={styles.container}>
      <Htag tag="h1">World Weather</Htag>
    </div>
  );
};

export default LocationWeatherCard;
