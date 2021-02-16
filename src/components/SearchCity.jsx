import React from "react";
import WeatherDisplay from "./WeatherDisplay";
import mockData from "../data/MockWeatherData";
import useFetchData from "../services/useFetchDataUnmounted";

export default function SearchCity({ city, celcius }) {
  const { data: weatherData, error } = useFetchData(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0d9a54be6ed79bbc56fec4528ad25e92&units=${
      celcius ? "metric" : "imperial"
    }`,
    mockData
  );

  if (error) throw error;
  return <WeatherDisplay weatherData={weatherData} celcius={celcius} />;
}
