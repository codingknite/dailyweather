import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Weather from "./Weather";
import "./App.css";
import mockWeatherData from "./data/MockWeatherData";

const Main = styled.main`
  background: #edf2f4;
  height: 100vh;
  display: flex;
`;

export default function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(mockWeatherData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
          `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
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
  }, [city]);

  return (
    <Main>
      <Weather
        city={city}
        loading={loading}
        error={error}
        weatherData={weatherData}
      />
    </Main>
  );
}
