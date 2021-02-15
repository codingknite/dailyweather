import React, { useState } from "react";
import { GiCancel } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import styled from "styled-components";
import Spinner from "./Spinner";
import mockCountryData from "./data/MockCountryData";
import useFetchDataUnmounted from "./services/useFetchDataUnmounted";
import App from "./App";
import SearchCity from "./searchCity";
import select from "./img/select.svg";

const Main = styled.main`
  background: #00040a;
  height: 100vh;
  display: flex;
`;

const Section = styled.section`
  background: #010b1b;
  width: 30vw;
  display: flex;
  flex-direction: column;
`;

const Cancel = styled.button`
  align-self: flex-end;
  background: none;
  margin: 20px;
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: ease-in-out 200ms;
  }
`;

const Search = styled.div`
  position: relative;
  align-self: center;
  outline: none;

  .input-field {
    background: none;
    padding: 10px 0px 10px 30px;
    font-size: 0.9rem;
    outline: none;
    border: 2px solid #dcdcdc;
    border-radius: 3px;
    width: 13rem;
  }

  .search-icon {
    position: absolute;
    top: 12px;
    left: 5px;
    margin-left: 5px;
  }

  .search-button {
    padding: 10px;
    border-radius: 3px;
    margin-left: 20px;
    width: 80px;
    background: #1959b1;
    font-size: 0.9rem;
  }
`;

const Button = styled.button`
  background: none;
  width: 50%;
  margin: 25px 10px 10px 10px;
  align-self: center;
  display: flex;
  justify-content: center;
  padding: 15px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  border: 2px solid #696969;
  font-size: 0.9rem;

  &:hover {
    background: #d1d1d1;
    border: none;
    color: #010b1b;

    .arrow-right {
      display: none;
    }
  }
`;

const Illustration = styled.div`
  width: 70vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .search {
    width: 50rem;
  }

  h1 {
    margin-top: 8vh;
    font-weight: 500;
  }
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
          <GiCancel className="exit-btn" size="2em" />
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
          <BsSearch className="search-icon" color="blue" />
          <button className="search-button" disabled={!inputValue}>
            Search
          </button>
        </Search>

        {loading ? (
          <Spinner />
        ) : displayCities.length <= 7 ? (
          displayCities.map((city, index) => (
            <Button onClick={handleClick} value={city} key={index + 1}>
              {city}{" "}
              <MdKeyboardArrowRight size="1.4em" className="arrow-right" />
            </Button>
          ))
        ) : (
          displayCities.splice(0, 7).map((city, index) => (
            <Button onClick={handleClick} value={city} key={index + 1}>
              {city}{" "}
              <MdKeyboardArrowRight size="1.4em" className="arrow-right" />
            </Button>
          ))
        )}
      </Section>

      <Illustration>
        <img src={select} alt="" className="search" />
        <h1>Please Choose A Location</h1>
      </Illustration>
    </Main>
  );
}
