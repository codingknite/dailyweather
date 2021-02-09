import React from "react";
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
TODO 1: Implement Degree Buttons
TODO 2: fetch Icons for respsective weather condition
TODO 3: Implement event handler for Search Button
TODO 4: *LAST* Add Favorites page for favorite locations
*/
const WeatherDisplay = ({ city, loading, error, weatherData }) => {
  const formatDate = () => {
    const date = new Date().toDateString().split(" ");
    return `${date[0]}, ${date[2]} ${date[1]}`;
  };

  if (error) throw error;
  if (loading) return <Spinner />;
  if (!city) return <Spinner />;
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
