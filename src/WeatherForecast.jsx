import React from "react";
import Highlight from "./Hightlight";
import styled from "styled-components";

export default function WeatherForecast() {
  const WeatherForecast = styled.section`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  `;

  return (
    <WeatherForecast>
      <Highlight />
      <Highlight />
      <Highlight />
      <Highlight />
      <Highlight />
    </WeatherForecast>
  );
}
