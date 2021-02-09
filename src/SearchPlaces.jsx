import React, { useEffect, useRef, useState } from "react";
import { GiCancel } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
`;
const Cancel = styled.div`
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
const Cities = styled.div`
  align-self: center;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  width: 50%;
  padding: 10px;
  border: 2px solid black;
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

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  // const apiKey = process.env.REACT_APP_CITY_API;
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
      }
    }

    getCountries();
  }, []);

  const filterCities = allCountries.map((country) => country.name);

  const displayCities = filterCities.filter((city) =>
    city.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <Section>
      <Cancel>
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
          />
        </label>
        <BsSearch className="search-icon" />
        <button className="search-button" disabled={!inputValue}>
          Search
        </button>
      </Search>

      {displayCities.length <= 10
        ? displayCities.map((city, index) => (
            <Cities key={index}>
              {city} <MdKeyboardArrowRight />
            </Cities>
          ))
        : displayCities.splice(0, 9).map((city, index) => (
            <Cities key={index}>
              {city} <MdKeyboardArrowRight />
            </Cities>
          ))}
    </Section>
  );
}
