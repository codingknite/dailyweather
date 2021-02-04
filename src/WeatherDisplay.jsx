import React, { useState, useEffect } from "react";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import Spinner from "./Spinner";

const Navigation = styled.div`
  /* background: firebrick; */
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const WeatherIcon = styled.div`
  /* background-color: firebrick; */
  height: 20vh;
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Metrics = styled.div`
  /* background-color: firebrick; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
`;

const WeatherTemp = styled.span`
  font-size: 5rem;
`;

const WeatherDeg = styled.div`
  font-size: 2rem;
  /* background: blue; */
  height: 50%;
  display: flex;
  align-items: center;
  padding-top: 30px;
`;

const Cond = styled.div`
  text-align: center;
`;

/*
TODO 1: fetch Icons for respsective weather condition
TODO 2: Implement event handler for Search Button
TODO 3: Add Favorites page for favorite locations
*/
const WeatherDisplay = () => {
  const testData = {
    coord: {
      lon: 32.5822,
      lat: 0.3163,
    },
    weather: [
      {
        id: 801,
        main: "Clouds",
        description: "few clouds",
        icon: "02d",
      },
    ],
    base: "stations",
    main: {
      temp: 27,
      feels_like: 25.84,
      temp_min: 27,
      temp_max: 27,
      pressure: 1014,
      humidity: 61,
    },
    visibility: 10000,
    wind: {
      speed: 6.17,
      deg: 160,
    },
    clouds: {
      all: 20,
    },
    dt: 1612365668,
    sys: {
      type: 1,
      id: 2642,
      country: "UG",
      sunrise: 1612324823,
      sunset: 1612368394,
    },
    timezone: 10800,
    id: 232422,
    name: "London",
    cod: 200,
  };

  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(testData);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  async function getWeatherData() {
    const apiKey = process.env.REACT_APP_API_KEY;
    try {
      const response = fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=kampala&appid=${apiKey}&units=metric`
      );
      if (response.ok) {
        const json = await response.json();
        setWeatherData(json);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    async function getLocation() {
      try {
        const response = fetch("https://extreme-ip-lookup.com/json/");
        if (response.ok) {
          const json = await response.json();
          setCity(json.city);
        }
      } catch (error) {
        console.log("Error: ", error);
      }
    }
    getLocation();
  }, []);

  useEffect(() => {
    getWeatherData();
  }, []);

  console.log(city);
  const formatDate = () => {
    const date = new Date().toDateString().split(" ");
    return `${date[0]}, ${date[2]} ${date[1]}`;
  };

  if (error) throw error;
  if (loading) return <Spinner />;
  return (
    <>
      <Navigation>
        <button>Search for places</button>
        <button>
          <IoIcons.IoMdAddCircle size="2em" />
        </button>
      </Navigation>

      <WeatherIcon>
        <FaIcons.FaCloudRain size="5em" />
      </WeatherIcon>

      <Metrics>
        <WeatherTemp>{Math.floor(weatherData.main.temp)}</WeatherTemp>{" "}
        <WeatherDeg>&deg;C</WeatherDeg>
      </Metrics>

      <br />
      <Cond>
        <h2>{weatherData.weather[0].main}</h2>
      </Cond>
      <br />

      <br />
      <Cond>
        <div>
          <span>Today • </span> {formatDate()}
        </div>
      </Cond>
      <br />

      <br />
      <Cond>
        <div>
          <span>
            <MdIcons.MdLocationOn />
          </span>{" "}
          {city + ","} {weatherData.sys.country}
        </div>
      </Cond>
      <br />
    </>
  );
};

export default WeatherDisplay;
