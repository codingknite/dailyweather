import React, { useState } from "react";
import styled from "styled-components";
import App from "../App";
import Spinner from "./Spinner";
import select from "../img/select.svg";
import SearchCity from "./SearchCity";
import { GiCancel } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import mockCountryData from "../data/MockCountryData";
import useFetchDataUnmounted from "../services/useFetchDataUnmounted";

const Main = styled.main`
  background: #00040a;
  height: 100vh;
  display: flex;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const Section = styled.section`
  background: #010b1b;
  width: 30vw;
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    width: 50vw;
  }

  @media (max-width: 768px) {
    width: 60vw;
  }

  @media (max-width: 480px) {
    width: 100vw;
    height: 100vh;
  }

  @media (max-width: 320px) {
    height: 100vh;
  }
`;

const Cancel = styled.button`
  align-self: flex-end;
  background: none;
  margin: 30px;
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
    width: 14rem;
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

  @media (max-width: 480px) {
    margin-top: 5vh;
  }

  @media (max-width: 320px) {
    .input-field {
      width: 10rem;
    }
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

  @media (max-width: 768px) {
    width: 70%;
  }

  @media (max-width: 320px) {
  }
`;

const Illustration = styled.div`
  width: 70vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .search {
    width: 20rem;
  }

  h1 {
    font-size: 1.5rem;
    margin-top: 8vh;
    font-weight: 500;
  }

  @media (max-width: 480px) {
    display: none;
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
          <input
            type="text"
            placeholder="Search For Places"
            className="input-field"
            value={inputValue}
            onChange={handleInput}
            autoFocus={true}
          />
          <BsSearch className="search-icon" color="blue" />
          <button className="search-button" disabled={!inputValue}>
            Search
          </button>
        </Search>

        {loading ? (
          <Spinner />
        ) : displayCities.length <= 5 ? (
          displayCities.map((city, index) => (
            <Button onClick={handleClick} value={city} key={index + 1}>
              {city}{" "}
              <MdKeyboardArrowRight size="1.4em" className="arrow-right" />
            </Button>
          ))
        ) : (
          displayCities.splice(0, 5).map((city, index) => (
            <Button onClick={handleClick} value={city} key={index + 1}>
              {city}{" "}
              <MdKeyboardArrowRight size="1.4em" className="arrow-right" />
            </Button>
          ))
        )}
      </Section>

      <Illustration>
        <img src={select} alt="search svg" className="search" />
        <h1>Please Choose A Location.</h1>
      </Illustration>
    </Main>
  );
}
