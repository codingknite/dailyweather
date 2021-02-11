import React, { useEffect, useState } from "react";
import styled from "styled-components";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import mockWeatherCond from "./data/MockWeatherCondition";
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

const Img = styled.img`
  width: 160px;
`;

/*
TODO 4: *LAST* Add Favorites page for favorite locations
*/
const WeatherDisplay = ({ city, loading, error, weatherData, celcius }) => {
  const [condition, setCondition] = useState(mockWeatherCond);
  const [searchPlaces, setSearchPlaces] = useState(false);

  const formatDate = () => {
    const date = new Date().toDateString().split(" ");
    return `${date[0]}, ${date[2]} ${date[1]}`;
  };

  useEffect(() => {
    async function fetchCondition() {
      const apiKey = process.env.REACT_APP_API_KEY;
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
        );

        if (response.ok) {
          const data = await response.json();
          setCondition(data);
        }
      } catch (error) {
        console.log("Error: ---->", error);
      }
    }

    fetchCondition();
  }, [city]);

  const iconLink = `http://openweathermap.org/img/wn/${condition.weather[0].icon}@2x.png`;

  if (error) throw error;
  if (loading) return <Spinner />;
  if (!city) return <Spinner />;
  return (
    <>
      <Navigation>
        <button onClick={() => setSearchPlaces(true)}>Search for places</button>
        <button>
          <IoIcons.IoMdAddCircle size="2em" />
        </button>
      </Navigation>

      <WeatherIcon>
        <Img src={iconLink} alt="" />
      </WeatherIcon>

      <Metrics>
        <WeatherTemp>{Math.floor(weatherData.main.temp)}</WeatherTemp>{" "}
        <WeatherDeg>
          {celcius ? <span>&deg;C</span> : <span> &deg;F</span>}
        </WeatherDeg>
      </Metrics>

      <br />
      <Cond>
        <h2>{weatherData.weather[0].description}</h2>
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
