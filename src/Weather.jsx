import React from "react";
import styled from "styled-components";
import WeatherDisplay from "./WeatherDisplay";

const Main = styled.main`
  background: #edf2f4;
  height: 100vh;
  display: flex;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 30vw;
  height: 100vh;
  background-color: #002521;
  color: white;
`;

const Weather = ({ city, loading, error, weatherData, celcius }) => {
  return (
    <>
      {/* <Section> */}
      <WeatherDisplay
        city={city}
        loading={loading}
        error={error}
        weatherData={weatherData}
        celcius={celcius}
      />
      {/* </Section> */}
    </>
  );
};

export default Weather;
