import React from "react";
import styled from "styled-components";
import Weather from "./Weather";
import Highlights from "./Highlights";
import "./App.css";

const Main = styled.main`
  background: #edf2f4;
  height: 100vh;
  display: flex;
`;

export default function App() {
  return (
    <Main>
      <Weather />
      <Highlights />
    </Main>
  );
}
