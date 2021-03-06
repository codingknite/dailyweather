import React, { useState } from "react";
import styled from "styled-components";
import App from "../App";
import Highlights from "./Highlights";
import SearchPlaces from "./SearchPlaces";
import * as MdIcons from "react-icons/md";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as GiIcons from "react-icons/gi";
import * as WiIcons from "react-icons/wi";
import * as mdIcons from "react-icons/io5";
import * as FaIcons from "react-icons/fa";

const Main = styled.main`
  background: #001720;
  display: flex;
  height: 100vh;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const InfoSection = styled.section`
  width: 30vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(rgba(0, 0, 0, 20), rgba(0, 0, 0, 0.35)),
    url("https://images.unsplash.com/photo-1534709333714-775101d963c8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=638&q=80");
  background-repeat: no-repeat;
  background-position: inherit;
  background-size: cover;

  @media (max-width: 1024px) {
    width: 100vw;
    height: 100vh;
  }
`;

const Navigation = styled.div`
  margin-top: 1vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 15px;

  .search-button {
    background: #14213d;
    padding: 10px;
    border: none;
    cursor: pointer;
    border-radius: 3px;
    font-size: 0.9em;
  }

  .search-button:hover {
    transform: scale(1.05);
    transition: ease-in 100ms;
  }

  .add-favs {
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
  }

  .add-favs:hover {
    transform: scale(1.1);
    transition: ease-in 100ms;
  }
`;

const WeatherIcon = styled.div`
  height: 20vh;
  margin-top: 6vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Metrics = styled.div`
  margin-top: 1vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25vh;
`;

const WeatherTemp = styled.span`
  font-size: 7.5vw;

  @media (max-width: 480px) {
    font-size: 6.5rem;
  }

  @media (max-width: 320px) {
    font-size: 5.5rem;
  }
`;

const WeatherDeg = styled.div`
  font-size: 2.5rem;
  height: 50%;
  display: flex;
  align-items: center;
  padding-top: 30px;
`;

const Cond = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 30vh;

  p {
    margin-top: 0.5vh;
    font-weight: 500;
    font-size: 2rem;

    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  }

  .date-today {
    margin-top: 24vh;

    span {
      font-size: 1.2rem;

      @media (max-width: 480px) {
        font-size: 1rem;
      }
    }
  }

  .location {
    margin-top: 3vh;
  }

  @media (max-width: 1024px) {
    height: 50vh;
  }

  @media (max-width: 768px) {
    height: 40vh;

    .location {
      margin-top: 1.8vh;
    }
  }

  @media (max-width: 320px) {
    .date-today {
      margin-top: 16vh;
    }
  }
`;

const HighlightsSection = styled.section`
  background: #11151c;
  width: 70vw;
  align-self: flex-end;

  @media (max-width: 1024px) {
    background: #11151c;
    width: 100vw;
    align-self: flex-start;
  }
`;

const WeatherDisplay = ({ city, weatherData, celcius }) => {
  const [searchPlaces, setSearchPlaces] = useState(false);
  const [searchCurrent, setSearchCurrent] = useState(false);

  const formatDate = () => {
    const date = new Date().toDateString().split(" ");
    return `${date[0]}, ${date[2]} ${date[1]}`;
  };

  const handleCurrent = () => {
    setSearchCurrent(true);
  };

  const weatherIcons = {
    "01d": <IoIcons.IoMdSunny size="9rem" />,
    "01n": <IoIcons.IoMdSunny size="9rem" />,
    "02d": <IoIcons.IoIosPartlySunny size="9rem" />,
    "02n": <IoIcons.IoIosPartlySunny size="9rem" />,
    "03d": <FaIcons.FaCloud size="9rem" />,
    "03n": <FaIcons.FaCloud size="9rem" />,
    "04d": <WiIcons.WiCloudy size="9rem" />,
    "04n": <WiIcons.WiCloudy size="9rem" />,
    "09d": <FaIcons.FaCloudRain size="9rem" />,
    "09n": <FaIcons.FaCloudRain size="9rem" />,
    "10d": <GiIcons.GiRaining size="9rem" />,
    "10n": <GiIcons.GiRaining size="9rem" />,
    "11d": <mdIcons.IoThunderstormSharp size="9rem" />,
    "11n": <mdIcons.IoThunderstormSharp size="9rem" />,
    "13d": <GiIcons.GiSnowing size="9rem" />,
    "13n": <GiIcons.GiSnowing size="9rem" />,
    "50d": <RiIcons.RiHazeFill size="9rem" />,
    "50n": <RiIcons.RiHazeFill size="9rem" />,
  };

  const condIcon = weatherData.weather[0].icon;

  if (searchPlaces) return <SearchPlaces celcius={celcius} />;
  if (searchCurrent) return <App />;
  return (
    <Main>
      <InfoSection>
        <Navigation>
          <button
            className="search-button"
            onClick={() => setSearchPlaces(true)}
          >
            Search for places
          </button>
          <button className="add-favs" onClick={handleCurrent}>
            <MdIcons.MdMyLocation size="2.5em" />
          </button>
        </Navigation>

        <WeatherIcon>{weatherIcons[condIcon]}</WeatherIcon>

        <Metrics>
          <WeatherTemp>{Math.floor(weatherData.main.temp)}</WeatherTemp>{" "}
          <WeatherDeg>
            {celcius ? <span>&deg;C</span> : <span> &deg;F</span>}
          </WeatherDeg>
        </Metrics>

        <Cond>
          <p>{weatherData.weather[0].description}</p>
          <div className="date-today">
            <span>Today • </span> <span>{formatDate()}</span>
          </div>
          <div className="location">
            <span>
              <MdIcons.MdLocationOn />
            </span>{" "}
            {city + ","} {weatherData.sys.country}
          </div>
        </Cond>
      </InfoSection>
      <HighlightsSection>
        <Highlights city={city} weatherData={weatherData} celcius={celcius} />
      </HighlightsSection>
    </Main>
  );
};

export default WeatherDisplay;
