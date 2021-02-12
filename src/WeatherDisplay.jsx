import React, { useState } from "react";
import styled from "styled-components";
import mockWeatherCond from "./data/mockWeatherCondition";
import Spinner from "./Spinner";
import SearchPlaces from "./SearchPlaces";
import Highlights from "./Highlights";
import useFetchDataMounted from "./services/useFetchDataMounted";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";
import * as GiIcons from "react-icons/gi";
import * as FaIcons from "react-icons/fa";
import * as WiIcons from "react-icons/wi";
import * as mdIcons from "react-icons/io5";

const Main = styled.main`
  background: #001720;
  display: flex;
  height: 100vh;

  @media (max-width: 700px) {
    flex-direction: column;
    height: 100vh;
  }
`;

const InfoSection = styled.section`
  width: 30vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url("https://images.unsplash.com/photo-1534709333714-775101d963c8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=638&q=80");
  background-repeat: no-repeat;
  background-position: inherit;
  background-size: cover;
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
  font-size: 7.5rem;
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

  h1 {
    margin-top: 0.5vh;
    font-weight: 500;
    font-size: 2rem;
  }

  .date-today {
    margin-top: 24vh;

    span {
      font-size: 1.2rem;
    }
  }

  .location {
    margin-top: 3vh;
  }
`;

const HighlightsSection = styled.section`
  background: #11151c;
  width: 70vw;
  align-self: flex-end;
`;

/*
TODO 4: *LAST* Add Favorites page for favorite locations
*/

const WeatherDisplay = ({ city, loading, weatherData, error, celcius }) => {
  const [searchPlaces, setSearchPlaces] = useState(false);
  const apiKey = process.env.REACT_APP_API_KEY;

  const formatDate = () => {
    const date = new Date().toDateString().split(" ");
    return `${date[0]}, ${date[2]} ${date[1]}`;
  };

  let { data: condition } = useFetchDataMounted(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`,
    mockWeatherCond
  );

  const weatherIcons = {
    "01d": <IoIcons.IoMdSunny size="10em" />,
    "01n": <IoIcons.IoMdSunny size="10em" />,
    "02d": <IoIcons.IoIosPartlySunny size="10em" />,
    "02n": <IoIcons.IoIosPartlySunny size="10em" />,
    "03d": <FaIcons.FaCloud size="10em" />,
    "03n": <FaIcons.FaCloud size="10em" />,
    "04d": <WiIcons.WiCloudy size="10em" />,
    "04n": <WiIcons.WiCloudy size="10em" />,
    "09d": <FaIcons.FaCloudRain size="10em" />,
    "09n": <FaIcons.FaCloudRain size="10em" />,
    "10d": <GiIcons.GiRaining size="10em" />,
    "10n": <GiIcons.GiRaining size="10em" />,
    "11d": <mdIcons.IoThunderstormSharp size="10em" />,
    "11n": <mdIcons.IoThunderstormSharp size="10em" />,
    "13d": <GiIcons.GiSnowing size="10em" />,
    "13n": <GiIcons.GiSnowing size="10em" />,
    "50d": <RiIcons.RiHazeFill size="10em" />,
    "50n": <RiIcons.RiHazeFill size="10em" />,
  };

  const condIcon = condition.weather[0].icon;

  if (error) throw error;
  if (loading) return <Spinner />;
  if (!city) return <Spinner />;
  if (searchPlaces) return <SearchPlaces celcius={celcius} />;
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
          <button className="add-favs">
            <IoIcons.IoMdAddCircle size="2.5em" />
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
          <h1>{weatherData.weather[0].description}</h1>
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
