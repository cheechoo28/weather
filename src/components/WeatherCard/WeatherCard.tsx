import React, { useEffect, useState } from "react";
import styles from "./WeatherCard.module.scss";
import { Htag } from "../Htag/Htag";
import { Description } from "./Description/description";
import { IWeatherCardProps } from "./WeatherCard.props";
import { getLastUpdateText } from "../../utils/utils";

export const WeatherCard = ({ name, sys, weather, main, lastUpdate }: IWeatherCardProps) => {
  const [lastUpdateText, setLastUpdateText] = useState<string>("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLastUpdateText(getLastUpdateText(lastUpdate));
    }, 60000);
    setLastUpdateText(getLastUpdateText(lastUpdate));

    return () => {
      clearInterval(intervalId);
    };
  }, [lastUpdate]);

  return (
    <div className={styles.card}>
      <Htag tag="h2">
        {name}, {sys.country}
      </Htag>
      <div className={styles.subtitle}>Your current location</div>
      <Description
        weather={weather[0].main}
        temperature={main.temp}
        humidity={main.humidity}
        lastUpdate={lastUpdateText}
      />
    </div>
  );
};
