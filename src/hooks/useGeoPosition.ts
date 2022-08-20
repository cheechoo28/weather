import { useState, useEffect } from "react";

interface ICoordinates {
  lat: number;
  lon: number;
}

export const useGeoPosition = () => {
  const [position, setPosition] = useState<ICoordinates>({} as ICoordinates);
  const [error, setError] = useState<string | null>(null);

  const onChange: PositionCallback = ({ coords }) => {
    setPosition({
      lat: coords.latitude,
      lon: coords.longitude,
    });
  };
  const onError: PositionErrorCallback = (error) => {
    setError(error.message);
  };
  useEffect(() => {
    const geo = navigator.geolocation;
    if (!geo) {
      setError("Geolocation is not supported");
      return;
    }
    const watcher = geo.watchPosition(onChange, onError);
    return () => geo.clearWatch(watcher);
  }, []);
  return { ...position, error };
};
