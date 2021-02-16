import React from "react";
import WeatherDisplay from "./WeatherDisplay";

const Weather = ({ weatherData, celcius }) => {
  return (
    <>
      <WeatherDisplay weatherData={weatherData} celcius={celcius} />
    </>
  );
};

export default Weather;
