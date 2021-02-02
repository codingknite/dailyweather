import React from "react";
import styled from "styled-components";
import WeatherForecast from "./WeatherForecast";
import WindHighlight from "./WindHighlight";

export default function Highlights() {
  const HighlightSection = styled.section`
    width: 70vw;
    min-height: 100vh;
  `;

  const DegreeToggle = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 5px;

    .deg-celcius {
      margin-right: 5px;
    }
  `;

  return (
    <HighlightSection>
      <DegreeToggle>
        <button className="deg-celcius">&deg;C</button>
        <button>&deg;F</button>
      </DegreeToggle>
      <WeatherForecast />
      <WindHighlight />
    </HighlightSection>
  );
}
