import React from "react";
import WeatherDisplay from "./WeatherDisplay";

const Weather = ({ city, weatherData, celcius }) => {
  console.log(city, weatherData, celcius);
  return (
    <>
      <WeatherDisplay city={city} weatherData={weatherData} celcius={celcius} />
    </>
  );
};

export default Weather;
