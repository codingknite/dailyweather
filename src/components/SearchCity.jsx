import React from "react";
import WeatherDisplay from "./WeatherDisplay";
import mockData from "../data/MockWeatherData";
import useFetchData from "../services/useFetchDataUnmounted";

export default function SearchCity({ city, celcius }) {
  const apiKey = process.env.REACT_APP_API_KEY;

  const { data: weatherData, error } = useFetchData(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${
      celcius ? "metric" : "imperial"
    }`,
    mockData
  );

  if (error) throw error;
  return (
    <WeatherDisplay city={city} weatherData={weatherData} celcius={celcius} />
  );
}
