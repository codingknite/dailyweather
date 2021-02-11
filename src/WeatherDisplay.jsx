import React, { useState } from "react";
import styled from "styled-components";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import mockWeatherCond from "./data/mockWeatherCondition";
import Spinner from "./Spinner";
import SearchPlaces from "./SearchPlaces";
import Highlights from "./Highlights";
import useFetchDataMounted from "./services/useFetchDataMounted";

const Main = styled.main`
  /* background: #edf2f4; */
  display: flex;
  height: 100vh;
`;
const HighlightsSection = styled.section`
  background: firebrick;
  width: 70vw;
  align-self: flex-end;
`;

const InfoSection = styled.section`
  display: flex;
  flex-direction: column;
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

const Img = styled.img`
  width: 160px;
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

  const iconLink = `http://openweathermap.org/img/wn/${condition.weather[0].icon}@2x.png`;

  if (error) throw error;
  if (loading) return <Spinner />;
  if (!city) return <Spinner />;
  if (searchPlaces) return <SearchPlaces celcius={celcius} />;
  return (
    <Main>
      <InfoSection>
        <Navigation>
          <button onClick={() => setSearchPlaces(true)}>
            Search for places
          </button>
          <button>
            <IoIcons.IoMdAddCircle size="2em" />
          </button>
        </Navigation>

        <WeatherIcon>
          <Img src={iconLink} alt="" />{" "}
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
      </InfoSection>

      <HighlightsSection>
        <Highlights city={city} weatherData={weatherData} celcius={celcius} />
      </HighlightsSection>
    </Main>
  );
};

export default WeatherDisplay;
