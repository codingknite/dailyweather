import React, { useEffect, useState } from "react";
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
  const [city, setCity] = useState("");

  useEffect(() => {
    fetch("https://extreme-ip-lookup.com/json/")
      .then((response) => response.json())
      .then((data) => setCity(data.city))
      .catch((error) => {
        throw error;
      });
  }, []);

  return (
    <Main>
      <Weather city={city} />
      <Highlights city={city} />
    </Main>
  );
}
