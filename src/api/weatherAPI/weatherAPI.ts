import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { appid, baseUrl } from "./weatherAPI.constants";
import { IGetWeatherByGeoQuery, IGetWeatherByGeoResponse } from "./types";
import moment from "moment";

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getWeatherByGeo: builder.query<IGetWeatherByGeoResponse, IGetWeatherByGeoQuery>({
      query: ({ lat, lon }) => ({
        url: "weather",
        params: {
          lat,
          lon,
          appid,
          units: "metric",
          lang: "en",
        },
      }),
      transformResponse: (response: IGetWeatherByGeoResponse) => {
        return { ...response, lastUpdate: moment().toString() };
      },
    }),
  }),
});

// // Export hooks for usage in function components, which are
// // auto-generated based on the defined endpoints
export const { useGetWeatherByGeoQuery } = weatherApi;
