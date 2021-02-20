import React from "react";
import Weather from "./Weather";
import mockData from "../data/MockWeatherData";
import useFetchData from "../services/useFetchDataUnmounted";
import Spinner from "./Spinner";

export default function SearchCity({ city, celcius }) {
  const { data, error, loading } = useFetchData(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0d9a54be6ed79bbc56fec4528ad25e92&units=${
      celcius ? "metric" : "imperial"
    }`,
    mockData
  );
  console.log(city, data);
  if (loading) return <Spinner />;
  if (error) throw error;
  return <Weather city={city} weatherData={data} celcius={celcius} />;
}
