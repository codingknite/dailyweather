import React, { useState } from "react";
import styled from "styled-components";
import Spinner from "./components/Spinner";
import Weather from "./components/Weather";
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

  @media (max-width: 1024px) {
    right: 10%;
  }

  @media (max-width: 768px) {
    right: 15%;
  }

  @media (max-width: 480px) {
    right: 18%;
  }

  @media (max-width: 320px) {
    right: 0px;
    top: 60px;
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
  if (loading) return <Spinner />;
  return (
    <>
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

      <Weather city={city} weatherData={weatherData} celcius={celcius} />
    </>
  );
}
