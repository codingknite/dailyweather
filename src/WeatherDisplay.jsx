import React from "react";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import data from "./data/data";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 30vw;
  background-color: #002521;
  color: white;
`;

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

const WeatherDisplay = () => {
  const weatherData = data.consolidated_weather[0]; //Weather Data      

  const displayData = {
    temp: Math.floor(weatherData.the_temp),
    weatherState: weatherData.weather_state_name,
  };

  const formatDate = () => {
    const date = new Date().toDateString().split(" ");
    return `${date[0]}, ${date[2]} ${date[1]}`;
  };
  const displayDate = formatDate();

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
          console.log(pos);

          //TODO make API call to get locatoin @metaWeather
        },
        () => `Error`
      );
    }
  };

  getLocation();
  return (
    <Section>
      <Navigation>
        <button>Search</button>
        <button>
          <IoIcons.IoMdAddCircle size="2em" />
        </button>
      </Navigation>

      <WeatherIcon>
        <FaIcons.FaCloudRain size="5em" />
      </WeatherIcon>

      <Metrics>
        <WeatherTemp>{displayData.temp}</WeatherTemp>{" "}
        <WeatherDeg>&deg;C</WeatherDeg>
      </Metrics>

      <br />
      <Cond>
        <h2>{displayData.weatherState}</h2>
      </Cond>
      <br />

      <br />
      <Cond>
        <div>
          <span>Today • </span> {displayDate}
        </div>
      </Cond>
      <br />

      <br />
      <Cond>
        <div>
          <span>
            <MdIcons.MdLocationOn />
          </span>
          Kampala
        </div>
      </Cond>
      <br />
    </Section>
  );
};

export default WeatherDisplay;
