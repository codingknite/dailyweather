import React from "react";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import data from "./data/data.json";

const HighlightSection = styled.section`
  width: 70vw;
  min-height: 100vh;
`;

const DegreeToggle = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 5px;

  .deg-celcius {
    margin-right: 5px;
  }
`;

const Section = styled.section`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

const HighlightDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid black;
  padding: 10px;

  .temp {
    display: flex;
    width: 100%;
    margin-top: 10px;
    justify-content: space-around;
  }
`;

const WindDiv = styled.section`
  margin-top: 10vh;

  .wind-info {
    margin-top: 2vh;
    display: flex;
    justify-content: space-evenly;
  }

  .static {
    border: 2px solid black;
    padding: 10px;
  }
`;

export default function Highlights() {
  const weatherData = data.consolidated_weather[0];

  const forecast = {
    dayOne: {
      id: 6060122049609728,
      weather_state_name: "Heavy Rain",
      weather_state_abbr: "hr",
      wind_direction_compass: "SW",
      created: "2021-02-01T12:20:02.945495Z",
      applicable_date: "2021-02-02",
      min_temp: 4.859999999999999,
      max_temp: 12.785,
      the_temp: 12.170000000000002,
      wind_speed: 8.497234809120071,
      wind_direction: 225.99632416358764,
      air_pressure: 995.0,
      humidity: 83,
      visibility: 8.16450678040245,
      predictability: 77,
    },
    dayTwo: {
      id: 6502297522667520,
      weather_state_name: "Heavy Rain",
      weather_state_abbr: "hr",
      wind_direction_compass: "W",
      created: "2021-02-01T12:20:02.939476Z",
      applicable_date: "2021-02-03",
      min_temp: 6.41,
      max_temp: 10.105,
      the_temp: 9.355,
      wind_speed: 7.730023053174793,
      wind_direction: 263.17667602831744,
      air_pressure: 997.0,
      humidity: 77,
      visibility: 6.147535890400064,
      predictability: 77,
    },
    dayThree: {
      id: 5460978272567296,
      weather_state_name: "Light Rain",
      weather_state_abbr: "lr",
      wind_direction_compass: "SSW",
      created: "2021-02-01T12:20:02.235625Z",
      applicable_date: "2021-02-04",
      min_temp: 5.605,
      max_temp: 10.0,
      the_temp: 9.864999999999998,
      wind_speed: 5.690536544701609,
      wind_direction: 195.1614704854387,
      air_pressure: 1010.5,
      humidity: 83,
      visibility: 10.666768571542192,
      predictability: 75,
    },
    dayFour: {
      id: 6171623964016640,
      weather_state_name: "Light Rain",
      weather_state_abbr: "lr",
      wind_direction_compass: "NNE",
      created: "2021-02-01T12:20:03.393348Z",
      applicable_date: "2021-02-05",
      min_temp: 5.545,
      max_temp: 8.615,
      the_temp: 8.225,
      wind_speed: 6.418702668792917,
      wind_direction: 18.951803261629323,
      air_pressure: 1012.0,
      humidity: 81,
      visibility: 9.96586186669848,
      predictability: 75,
    },
    dayFive: {
      id: 5905696366264320,
      weather_state_name: "Heavy Cloud",
      weather_state_abbr: "hc",
      wind_direction_compass: "NNE",
      created: "2021-02-01T12:20:06.670340Z",
      applicable_date: "2021-02-06",
      min_temp: 1.42,
      max_temp: 5.19,
      the_temp: 3.68,
      wind_speed: 9.391744810307802,
      wind_direction: 27.999999999999996,
      air_pressure: 1012.0,
      humidity: 74,
      visibility: 9.999726596675416,
      predictability: 71,
    },
  };

  const generateHighlightDate = (date) => {
    const dateArray = date.split("-");
    const [, month, day] = dateArray;
    const dateObject = {
      days: {
        1: "Mon",
        2: "Tue",
        3: "Wed",
        4: "Thur",
        5: "Fri",
        6: "Sat",
        7: "Sun",
      },
      months: {
        1: "Jan",
        2: "Feb",
        3: "Mar",
        4: "Apr",
        5: "May",
        6: "Jun",
        7: "Jul",
        8: "Aug",
        9: "Sep",
        10: "Oct",
        11: "Nov",
        12: "Dec",
      },
    };

    return `${dateObject.days[Number(day)]}, ${Number(day)} ${
      dateObject.months[Number(month)]
    }`;
  };

  const highlights = {
    windDir: weatherData.wind_direction_compass,
    windSpeed: weatherData.wind_speed,
    humidity: weatherData.humidity,
    visibility: weatherData.visibility,
    airPressure: weatherData.air_pressure,
  };

  const formatVisibility = (v) => {
    const visibilityArr = v.toFixed(1).split("");
    visibilityArr.splice(1, 1);
    return visibilityArr.join(",");
  };

  return (
    <HighlightSection>
      <DegreeToggle>
        <button className="deg-celcius">&deg;C</button>
        <button>&deg;F</button>
      </DegreeToggle>

      {/* WEATHER FORECAST */}
      <Section>
        <HighlightDiv>
          <h4 className="day">Tomorrow</h4>
          <FaIcons.FaCloudRain size="3em" />
          <div className="temp">
            <p className="max-temp">
              {Math.floor(forecast.dayOne.max_temp)}&deg;
            </p>
            <p className="min-temp">
              {Math.floor(forecast.dayOne.min_temp)}&deg;
            </p>
          </div>
        </HighlightDiv>

        <HighlightDiv>
          <h4 className="day">
            {generateHighlightDate(forecast.dayTwo.applicable_date)}
          </h4>
          <FaIcons.FaCloudRain size="3em" />
          <div className="temp">
            <p className="max-temp">
              {Math.floor(forecast.dayTwo.max_temp)}&deg;
            </p>
            <p className="min-temp">
              {Math.floor(forecast.dayTwo.min_temp)}&deg;
            </p>
          </div>
        </HighlightDiv>

        <HighlightDiv>
          <h4 className="day">
            {generateHighlightDate(forecast.dayThree.applicable_date)}
          </h4>
          <FaIcons.FaCloudRain size="3em" />
          <div className="temp">
            <p className="max-temp">
              {Math.floor(forecast.dayThree.max_temp)}&deg;
            </p>
            <p className="min-temp">
              {Math.floor(forecast.dayThree.min_temp)}&deg;
            </p>
          </div>
        </HighlightDiv>

        <HighlightDiv>
          <h4 className="day">
            {generateHighlightDate(forecast.dayFour.applicable_date)}
          </h4>
          <FaIcons.FaCloudRain size="3em" />
          <div className="temp">
            <p className="max-temp">
              {Math.floor(forecast.dayFour.max_temp)}&deg;
            </p>
            <p className="min-temp">
              {Math.floor(forecast.dayFour.min_temp)}&deg;
            </p>
          </div>
        </HighlightDiv>

        <HighlightDiv>
          <h4 className="day">
            {generateHighlightDate(forecast.dayFive.applicable_date)}
          </h4>
          <FaIcons.FaCloudRain size="3em" />
          <div className="temp">
            <p className="max-temp">
              {Math.floor(forecast.dayFive.max_temp)}&deg;
            </p>
            <p className="min-temp">
              {Math.floor(forecast.dayFive.min_temp)}&deg;
            </p>
          </div>
        </HighlightDiv>
      </Section>
      {/* WEATHER HIGHLIGHTS */}
      <WindDiv>
        <h2>Today's Highlights</h2>
        <div className="wind-info">
          <div className="static">
            <h3>Wind Status</h3>
            <div>
              {Math.floor(highlights.windSpeed)} <span>mph</span>
            </div>
            <div>
              <FaIcons.FaRegCompass /> <span>{highlights.windDir}</span>
            </div>
          </div>

          <div className="static">
            <h3>Humidity</h3>
            <div>
              {highlights.humidity} <span>%</span>
            </div>
            <div></div>
          </div>

          <div className="static">
            <h3>Visibility</h3>
            <div>
              {formatVisibility(highlights.visibility)} <span>Miles</span>
            </div>
          </div>

          <div className="static">
            <h3>Air Pressure</h3>
            <div>
              {highlights.airPressure} <span>mb</span>
            </div>
          </div>
        </div>
      </WindDiv>
    </HighlightSection>
  );
}
