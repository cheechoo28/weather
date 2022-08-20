import React from "react";
import { Htag, WeatherCard } from "../../components";
import styles from "./LocationWeatherContainer.module.scss";
import { useGetWeatherByGeoQuery } from "../../api/weatherAPI/weatherAPI";
import { useGeoPosition } from "../../hooks/useGeoPosition";

const LocationWeatherContainer = () => {
  const { lat, lon, error } = useGeoPosition();

  const { data } = useGetWeatherByGeoQuery({ lat, lon }, { skip: !lat && !lon });

  if (!data) return null;
  return (
    <div className={styles.container}>
      <Htag tag="h1">World Weather</Htag>
      <div className={styles.subtext}>Watch weather in your current location</div>
      <WeatherCard {...data} />
    </div>
  );
};

export default LocationWeatherContainer;
