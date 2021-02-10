import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import Spinner from "./Spinner";
import testForecast from "./data/MockForecast";

const HighlightSection = styled.section`
  width: 70vw;
  min-height: 100vh;
`;

const Section = styled.section`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 12vh;
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

export default function Highlights({ city, weatherData, celcius }) {
  /* 
  TODO2: Fix the dates in the weather forecast tiles
  TODO3: Implement the degree buttons
  TODO4: Refactor the code for the application 
  TODO5: *VERY LAST* => Style the application
  */

  const [foreCast, setForeCast] = useState(testForecast);
  const [loading, setLoading] = useState(true);
  const isMounted = useRef(false);

  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    isMounted.current = true;
    async function getForecast() {
      try {
        const response = await fetch(
          `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${
            celcius ? "metric" : "imperial"
          }`
        );
        if (response.ok) {
          if (isMounted.current) {
            const json = await response.json();
            setForeCast(json);
          }
        } else {
          throw response;
        }
      } catch (error) {
        console.log("Error: >>>", error);
      } finally {
        setLoading(false);
      }
    }

    getForecast();
    return () => {
      isMounted.current = false;
    };
  }, [apiKey, city, celcius]);

  const filter5Days = foreCast.list.filter(
    (item, index) => index % 8 === 0 || index === 39
  );
  filter5Days.splice(0, 1);

  const roundOff = (number) => Math.floor(number);

  const visibilityToMiles = (visibility) =>
    (visibility / 1609).toFixed(1).toString().replace(".", ",");

  const generateNextDate = (num) => {
    const today = new Date();
    let newDate = new Date();
    newDate.setDate(today.getDate() + num);
    const nextDate = newDate.toDateString().split(" ");
    return `${nextDate[0]}, ${nextDate[2]} ${nextDate[1]}`;
  };

  const followingDates = {
    0: "Tomorrow",
    1: generateNextDate(2),
    2: generateNextDate(3),
    3: generateNextDate(4),
    4: generateNextDate(5),
  };

  return (
    <HighlightSection>
      {/* WEATHER FORECAST */}
      <Section>
        {loading ? (
          <Spinner />
        ) : (
          filter5Days.map((day, index) => (
            <HighlightDiv key={index}>
              <h4>{followingDates[index]}</h4>
              <FaIcons.FaCloudRain size="3em" />
              <div className="temp">
                <p className="max-temp">{roundOff(day.main.temp_max)}&deg;</p>
                <p className="min-temp">{roundOff(day.main.temp_min)}&deg;</p>
              </div>
            </HighlightDiv>
          ))
        )}
      </Section>

      {/* WEATHER HIGHLIGHTS */}
      <WindDiv>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <h2>Today's Highlights</h2>
            <div className="wind-info">
              <div className="static">
                <h3>Wind Status</h3>
                <div>
                  {roundOff(weatherData.wind.speed) + " "}
                  <span>mph</span>
                </div>
                <div>
                  <FaIcons.FaRegCompass />{" "}
                  <span>{roundOff(weatherData.wind.deg)}&deg;</span>
                </div>
              </div>

              <div className="static">
                <h3>Humidity</h3>
                <div>
                  {roundOff(weatherData.main.humidity) + " "}
                  <span>%</span>
                </div>
                <div></div>
              </div>

              <div className="static">
                <h3>Visibility</h3>
                <div>
                  {visibilityToMiles(weatherData.visibility)} <span>Miles</span>
                </div>
              </div>

              <div className="static">
                <h3>Air Pressure</h3>
                <div>
                  {weatherData.main.pressure} <span>mb</span>
                </div>
              </div>
            </div>
          </>
        )}
      </WindDiv>
    </HighlightSection>
  );
}
