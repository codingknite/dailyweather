import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import Spinner from "./Spinner";
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

export default function Highlights({ city }) {
  const testResponse = {
    // Mock data from the API
    cod: "200",
    message: 0,
    cnt: 5,
    list: [
      {
        dt: 1612450800,
        main: {
          temp: 8.54,
          feels_like: 4.89,
          temp_min: 8.41,
          temp_max: 8.54,
          pressure: 1009,
          sea_level: 1009,
          grnd_level: 1005,
          humidity: 85,
          temp_kf: 0.13,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d",
          },
        ],
        clouds: {
          all: 87,
        },
        wind: {
          speed: 3.95,
          deg: 161,
        },
        visibility: 10000,
        pop: 0.94,
        rain: {
          "3h": 1.16,
        },
        sys: {
          pod: "d",
        },
        dt_txt: "2021-02-04 15:00:00",
      },
      {
        dt: 1612461600,
        main: {
          temp: 8.16,
          feels_like: 5.29,
          temp_min: 8.02,
          temp_max: 8.16,
          pressure: 1008,
          sea_level: 1008,
          grnd_level: 1004,
          humidity: 91,
          temp_kf: 0.14,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10n",
          },
        ],
        clouds: {
          all: 92,
        },
        wind: {
          speed: 3.03,
          deg: 155,
        },
        visibility: 10000,
        pop: 0.98,
        rain: {
          "3h": 0.55,
        },
        sys: {
          pod: "n",
        },
        dt_txt: "2021-02-04 18:00:00",
      },
      {
        dt: 1612472400,
        main: {
          temp: 7.74,
          feels_like: 3.81,
          temp_min: 7.68,
          temp_max: 7.74,
          pressure: 1007,
          sea_level: 1007,
          grnd_level: 1004,
          humidity: 91,
          temp_kf: 0.06,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10n",
          },
        ],
        clouds: {
          all: 91,
        },
        wind: {
          speed: 4.42,
          deg: 153,
        },
        visibility: 10000,
        pop: 0.64,
        rain: {
          "3h": 0.28,
        },
        sys: {
          pod: "n",
        },
        dt_txt: "2021-02-04 21:00:00",
      },
      {
        dt: 1612483200,
        main: {
          temp: 6.97,
          feels_like: 4.34,
          temp_min: 6.96,
          temp_max: 6.97,
          pressure: 1007,
          sea_level: 1007,
          grnd_level: 1004,
          humidity: 95,
          temp_kf: 0.01,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10n",
          },
        ],
        clouds: {
          all: 79,
        },
        wind: {
          speed: 2.51,
          deg: 184,
        },
        visibility: 10000,
        pop: 1,
        rain: {
          "3h": 0.53,
        },
        sys: {
          pod: "n",
        },
        dt_txt: "2021-02-05 00:00:00",
      },
      {
        dt: 1612494000,
        main: {
          temp: 6.17,
          feels_like: 3.76,
          temp_min: 6.17,
          temp_max: 6.17,
          pressure: 1007,
          sea_level: 1007,
          grnd_level: 1004,
          humidity: 97,
          temp_kf: 0,
        },
        weather: [
          {
            id: 801,
            main: "Clouds",
            description: "few clouds",
            icon: "02n",
          },
        ],
        clouds: {
          all: 12,
        },
        wind: {
          speed: 2.05,
          deg: 198,
        },
        visibility: 10000,
        pop: 0.02,
        sys: {
          pod: "n",
        },
        dt_txt: "2021-02-05 03:00:00",
      },
    ],
    city: {
      id: 2643743,
      name: "London",
      coord: {
        lat: 51.5085,
        lon: -0.1257,
      },
      country: "GB",
      population: 1000000,
      timezone: 0,
      sunrise: 1612424039,
      sunset: 1612457692,
    },
  };

  /* 
  TODO1: Fill In Data For Today's Highlights
  TODO2: Fix the dates in the weather forecast tiles
  TODO3: Implement the degree buttons
  TODO4: Refactor the code for the application 
  TODO5: *VERY LAST* => Style the application
  */

  const [foreCast, setForeCast] = useState(testResponse);
  const [loading, setLoading] = useState(true);
  const isMounted = useRef(false);

  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    isMounted.current = true;
    async function getForecast() {
      try {
        const response = await fetch(
          `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&cnt=5&units=metric`
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
  }, [apiKey, city]);

  return (
    <HighlightSection>
      <DegreeToggle>
        <button className="deg-celcius">&deg;C</button>
        <button>&deg;F</button>
      </DegreeToggle>

      {/* WEATHER FORECAST */}
      <Section>
        {loading ? (
          <Spinner />
        ) : (
          foreCast.list.map((day, index) => (
            <HighlightDiv key={index}>
              <h4>Tomorrow</h4>
              <FaIcons.FaCloudRain size="3em" />
              <div className="temp">
                <p className="max-temp">{Math.floor(day.main.temp_max)}&deg;</p>
                <p className="min-temp">{Math.floor(day.main.temp_min)}&deg;</p>
              </div>
            </HighlightDiv>
          ))
        )}
      </Section>

      {/* WEATHER HIGHLIGHTS */}
      <WindDiv>
        <h2>Today's Highlights</h2>
        <div className="wind-info">
          <div className="static">
            <h3>Wind Status</h3>
            <div>
              4<span>mph</span>
            </div>
            <div>
              <FaIcons.FaRegCompass /> <span>NNE</span>
            </div>
          </div>

          <div className="static">
            <h3>Humidity</h3>
            <div>
              86<span>%</span>
            </div>
            <div></div>
          </div>

          <div className="static">
            <h3>Visibility</h3>
            <div>
              8,4 <span>Miles</span>
            </div>
          </div>

          <div className="static">
            <h3>Air Pressure</h3>
            <div>
              998 <span>mb</span>
            </div>
          </div>
        </div>
      </WindDiv>
    </HighlightSection>
  );
}
