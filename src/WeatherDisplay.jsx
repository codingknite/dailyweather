import React, { useState } from "react";
import styled from "styled-components";
import * as IoIcons from "react-icons/io";
import Spinner from "./Spinner";
import WeatherInfo from "./WeatherInfo";
import SearchPlaces from "./SearchPlaces";

const Navigation = styled.div`
  /* background: firebrick; */
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

/*
TODO 1: Implement Degree Buttons
TODO 2: fetch Icons for respsective weather condition
TODO 3: Implement event handler for Search Button
TODO 4: *LAST* Add Favorites page for favorite locations
*/
const WeatherDisplay = ({ city, loading, error, weatherData }) => {
  const [searchPlaces, setSearchPlaces] = useState(false);

  if (error) throw error;
  if (loading) return <Spinner />;
  if (!city) return <Spinner />;
  if (searchPlaces) return <SearchPlaces />;
  return (
    <>
      <Navigation>
        <button onClick={() => setSearchPlaces(true)}>Search for places</button>
        <button>
          <IoIcons.IoMdAddCircle size="2em" />
        </button>
      </Navigation>

      <WeatherInfo weatherData={weatherData} city={city} />
    </>
  );
};

export default WeatherDisplay;
