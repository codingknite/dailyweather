import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";
import Weather from "./Weather";
import useFetchWeatherData from "./services/useFetchWeatherData";

const DegreeToggle = styled.div`
  position: absolute;
  right: 0px;
  display: flex;
  justify-content: flex-end;
  padding: 5px;
  height: 10vh;

  .deg-celcius {
    margin-right: 5px;
  }
`;

export default function App() {
  const [celcius, setCelcius] = useState(true);
  const { city, weatherData, error } = useFetchWeatherData(celcius);

  const handleFaregnHeight = () => {
    setCelcius(false);
  };

  const handleCelcius = () => {
    setCelcius(true);
  };

  if (error) throw error;
  return (
    <>
      <DegreeToggle>
        <div>
          <button className="deg-celcius" onClick={handleCelcius}>
            &deg;C
          </button>
          <button onClick={handleFaregnHeight}>&deg;F</button>
        </div>
      </DegreeToggle>
      <Weather city={city} weatherData={weatherData} celcius={celcius} />
    </>
  );
}
 