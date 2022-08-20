export interface IGetWeatherByGeoQuery {
  lat: number;
  lon: number;
}

export interface IGetWeatherByGeoQuery {
  lat: number;
  lon: number;
}

type Main = "temp" | "feels_like" | "temp_min" | "temp_max" | "pressure" | "humidity";

type Clouds = {
  all: number;
};

type Sys = {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
};

type Wind = {
  speed: number;
  deg: number;
};

export type Weather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export interface IGetWeatherByGeoResponse {
  base: string;
  clouds: Clouds;
  cod: number;
  coord: IGetWeatherByGeoQuery;
  dt: number;
  id: number;
  main: Record<Main, number>;
  name: string;
  sys: Sys;
  timezone: number;
  lastUpdate: string;
  visibility: number;
  weather: Array<Weather>;
  wind: Wind;
}
