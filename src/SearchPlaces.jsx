import React, { useEffect, useState } from "react";
import { GiCancel } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import styled from "styled-components";
import Spinner from "./Spinner";
import MainWeather from "./App";

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

/*
TODO TODAYAadd 
TODO Fix Highlight Page Rendering
TODO After Fixing Highlights Rendering implement exit button 
*/

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
export default function SearchPlaces() {
  const [inputValue, setInputValue] = useState("");
  const [allCountries, setAllCountries] = useState([
    {
      country: "Andorra",
      geonameid: 3040051,
      name: "les Escaldes",
      subcountry: "Escaldes-Engordany",
    },
    {
      country: "Andorra",
      geonameid: 3041563,
      name: "Andorra la Vella",
      subcountry: "Andorra la Vella",
    },
  ]);
  const [weatherData, setWeatherData] = useState();
  const [selectedCity, setSelectedCity] = useState("");
  const [loading, setLoading] = useState(true);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    async function getCountries() {
      try {
        const response = await fetch(
          "https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json"
        );
        if (response.ok) {
          const data = await response.json();
          setAllCountries(data);
        } else {
          throw response;
        }
      } catch (error) {
        throw error;
      } finally {
        setLoading(false);
      }
    }

    getCountries();
  }, []);

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

  useEffect(() => {
    async function fetchWeatherData() {
      const apiKey = process.env.REACT_APP_API_KEY;
      try {
        const response = await fetch(
          `http://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${apiKey}&units=metric`
        );

        if (response.ok) {
          const data = await response.json();
          setWeatherData(data);
        } else {
          throw response;
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchWeatherData();
  }, [selectedCity]);

  console.log(selectedCity);
  console.log(weatherData);

  return (
    <>
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
    </>
  );
}
