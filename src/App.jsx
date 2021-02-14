import React, { useState } from "react";
import styled from "styled-components";
import Weather from "./Weather";
import useFetchWeatherData from "./services/useFetchWeatherData";
import "./App.css";

const DegreeToggle = styled.div`
  position: absolute;
  right: 10px;
  top: 15px;
  display: flex;
  justify-content: flex-end;
  padding: 5px;
  height: 10vh;

  .deg-celcius,
  .deg-faregn {
    margin-right: 5px;
    border: 2px solid black;
    background: #14213d;
    padding: 10px;
    border-radius: 50%;
    font-size: 1.05rem;
    font-weight: 600;
    cursor: pointer;
    outline: none;

    &:hover {
      transform: scale(1.1);
      transition: ease-in-out 200ms;
    }
  }

  .active {
    background: aliceblue;
    color: #14213d;
  }
`;

export default function App() {
  const [celcius, setCelcius] = useState(true);
  const { city, weatherData, loading, error } = useFetchWeatherData(celcius);

  const handleFaregnHeight = () => {
    setCelcius(false);
  };

  const handleCelcius = () => {
    setCelcius(true); 
  };

  if (error) throw error;
  return (
    <>
      {loading ? (
        ""
      ) : (
        <DegreeToggle>
          <div>
            <button
              className={celcius ? "deg-celcius active" : "deg-celcius"}
              onClick={handleCelcius}
            >
              &deg;C
            </button>
            <button
              className={celcius ? "deg-faregn" : "deg-faregn active"}
              onClick={handleFaregnHeight}
            >
              &deg;F
            </button>
          </div>
        </DegreeToggle>
      )}
      <Weather city={city} weatherData={weatherData} celcius={celcius} />
    </>
  );
}
