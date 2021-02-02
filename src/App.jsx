import React from "react";
import styled from "styled-components";
import WeatherDisplay from "./WeatherDisplay";
import Highlights from "./Highlights";
import "./App.css";

export default function App() {
  const Main = styled.main`
    background: #edf2f4;
    height: 100vh;
    display: flex;
  `;

  return (
    <Main>
      <Main>
        <WeatherDisplay />
        <Highlights />
      </Main>
    </Main>
  );
}
