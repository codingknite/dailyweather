import React from "react";
import styled from "styled-components";
import WeatherDisplay from "./WeatherDisplay";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 30vw;
  background-color: #002521;
  color: white;
`;

const Weather = ({ city }) => {
  return (
    <Section>
      <WeatherDisplay city={city} />
    </Section>
  );
};

export default Weather;