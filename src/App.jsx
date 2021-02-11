import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Weather from "./Weather";
import "./App.css";
import mockWeatherData from "./data/MockWeatherData";
import Highlights from "./Highlights";

const Main = styled.main`
  background: #edf2f4;
  height: 100vh;
  display: flex;
`;

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
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(mockWeatherData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [celcius, setCelcius] = useState(true);

  useEffect(() => {
    fetch("https://extreme-ip-lookup.com/json/")
      .then((response) => response.json())
      .then((data) => setCity(data.city))
      .catch((error) => {
        throw error;
      });
  }, []);

  useEffect(() => {
    async function getWeatherData() {
      const apiKey = process.env.REACT_APP_API_KEY;
      try {
        const response = await fetch(
          `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${
            celcius ? "metric" : "imperial"
          }`
        );
        if (response.ok) {
          const json = await response.json();
          setWeatherData(json);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    getWeatherData();
  }, [city, celcius]);

  const handleFaregnHeight = () => {
    setCelcius(false);
  };

  const handleCelcius = () => {
    setCelcius(true);
  };

  return (
    <Main>
      <DegreeToggle>
        <div>
          <button className="deg-celcius" onClick={handleCelcius}>
            &deg;C
          </button>
          <button onClick={handleFaregnHeight}>&deg;F</button>
        </div>
      </DegreeToggle>
      <Weather
        city={city}
        loading={loading}
        error={error}
        weatherData={weatherData}
        celcius={celcius}
      />
      <Highlights city={city} weatherData={weatherData} celcius={celcius} />
    </Main>
  );
}
