import React, { useState } from "react";
import { GiCancel } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import styled from "styled-components";
import Spinner from "./Spinner";
import mockCountryData from "./data/mockCountryData";
import useFetchDataUnmounted from "./services/useFetchDataUnmounted";
import App from "./Weather";
import SearchCity from "./searchCity";

const Main = styled.main`
  background: #edf2f4;
  height: 100vh;
  display: flex;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
`;
const Cancel = styled.button`
  align-self: flex-end;
`;
const Search = styled.div`
  position: relative;
  align-self: center;

  .input-field {
    padding: 10px 0px 10px 30px;
    outline: none;
  }

  .search-icon {
    position: absolute;
    top: 12px;
    left: 5px;
    color: black;
  }

  .search-button {
    padding: 10px;
    margin-left: 20px;
  }
`;

const Button = styled.button`
  width: 50%;
  margin: 10px;
  align-self: center;
  display: flex;
  justify-content: center;
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

export default function SearchPlaces({ celcius }) {
  const [inputValue, setInputValue] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [exit, setExit] = useState(false);

  const {
    data: allCountries,
    error: countryError,
    loading,
  } = useFetchDataUnmounted(
    "https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json",
    mockCountryData
  );

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const filterCities = allCountries.map((country) => country.name);

  const displayCities = filterCities.filter((city) =>
    city.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleClick = (e) => {
    setSelectedCity(e.target.value);
  };

  const handleExit = () => {
    setExit(true);
  };

  if (selectedCity) return <SearchCity city={selectedCity} celcius={celcius} />;
  if (exit) return <App />;
  if (countryError) throw countryError;
  return (
    <Main>
      <Section>
        <Cancel onClick={handleExit}>
          <GiCancel />
        </Cancel>

        <Search>
          <label htmlFor="input-field">
            <input
              type="text"
              placeholder="Search For Places"
              className="input-field"
              value={inputValue}
              onChange={handleInput}
              autoFocus={true}
            />
          </label>
          <BsSearch className="search-icon" />
          <button className="search-button" disabled={!inputValue}>
            Search
          </button>
        </Search>

        {loading ? (
          <Spinner />
        ) : displayCities.length <= 10 ? (
          displayCities.map((city, index) => (
            <Button onClick={handleClick} value={city} key={index + 1}>
              {city} <MdKeyboardArrowRight />
            </Button>
          ))
        ) : (
          displayCities.splice(0, 9).map((city, index) => (
            <Button onClick={handleClick} value={city} key={index + 1}>
              {city} <MdKeyboardArrowRight />
            </Button>
          ))
        )}
      </Section>
    </Main>
  );
}
