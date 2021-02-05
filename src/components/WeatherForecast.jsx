import React from "react";
import Highlight from "./Hightlight";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

export default function WeatherForecast() {
  return (
    <Section>
      <Highlight />
      <Highlight />
      <Highlight />
      <Highlight /> 
      <Highlight />
    </Section>
  );
}
