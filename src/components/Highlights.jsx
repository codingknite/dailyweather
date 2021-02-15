import React from "react";
import styled from "styled-components";
import Spinner from "./Spinner";
import * as BsIcons from "react-icons/bs";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as GiIcons from "react-icons/gi";
import * as WiIcons from "react-icons/wi";
import * as mdIcons from "react-icons/io5";
import testForecast from "../data/MockForecast";
import useFetchData from "../services/useFetchDataMounted";

const HighlightSection = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 20), rgba(0, 0, 0, 0.7)),
    url("https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1504&q=80");
  background-repeat: no-repeat;
  background-position: inherit;
  background-size: cover;
  width: 70vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1024px) {
    width: 100vw;
  }
`;

const Section = styled.section`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 90%;
  padding: 20px;
  margin-top: 8vh;

  @media (max-width: 1024px) {
    height: 50vh;
  }

  @media (max-width: 767px) {
    height: 80vh;
  }

  @media (max-width: 480px) {
    height: 70vh;
    width: 95%;
  }

  @media (max-width: 320px) {
    height: 65vh;
    width: 95%;
  }
`;

const HighlightDiv = styled.div`
  background: #000a1c;
  width: 15%;
  height: 18vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-radius: 3px;

  h1 {
    font-size: 1.1rem;
    font-weight: 500;
  }

  .temp {
    display: flex;
    width: 100%;
    margin-top: 10px;
    justify-content: space-around;
  }

  @media (max-width: 1024px) {
    width: 30%;
    height: 19vh;
    margin: 10px;
    justify-content: space-around;

    h1 {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 767px) {
    width: 45%;
    height: 21vh;
    margin: 10px;
    justify-content: space-around;

    h1 {
      font-size: 1.1rem;
    }
  }

  @media (max-width: 480px) {
    width: 42%;
    height: 18vh;
    margin: 10px;
  }

  @media (max-width: 320px) {
    width: 44%;
    height: 20vh;
    margin: 5px;
  }
`;

const WindDiv = styled.section`
  width: 90%;
  height: 60vh;
  padding: 20px;
  margin-top: 5vh;

  h1 {
    font-weight: 500;
    font-size: 2rem;
    margin-left: 50px;
  }

  .wind-info {
    padding: 20px;
    margin-top: 2vh;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;

    .wind-status,
    .humidity {
      background: #000a1c;
      width: 30%;
      height: 25vh;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      padding: 10px;
      border-radius: 3px;

      h2 {
        font-size: 1.5rem;
        font-weight: 500;
      }
    }

    .wind-status {
      .w-speed {
        .wind-speed {
          font-size: 8rem;
          font-weight: 600;
        }
        .speed-unit {
          font-size: 2rem;
        }
      }

      .speed-direction {
        .speed-deg {
          font-size: 1.5rem;
        }
      }
    }

    .humidity {
      .h-percentage {
        font-size: 8rem;
        font-weight: 600;
      }
      .p-symbol {
        font-size: 2rem;
      }
    }
  }

  .air-info {
    padding: 20px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    height: 25vh;

    .visibility,
    .pressure {
      background: #000a1c;
      width: 40%;
      height: 20vh;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      padding: 10px;
      border-radius: 3px;

      h2 {
        font-size: 1.5rem;
        font-weight: 500;
      }
      .figure {
        font-size: 7rem;
        font-weight: 600;
      }

      .caption {
        font-size: 1.5rem;
      }
    }
  }

  .static {
    border: 2px solid black;
    padding: 10px;
  }

  @media (max-width: 1024px) {
    width: 100%;
    height: 70vh;
    margin-top: 3vh;

    h1 {
      font-weight: 500;
      font-size: 2.5rem;
      margin-left: 50px;
    }

    .wind-info {
      .wind-status,
      .humidity {
        background: #000a1c;
        width: 48%;
        height: 26vh;
        margin: 5px;
      }
    }

    .air-info {
      .visibility,
      .pressure {
        background: #000a1c;
        width: 48%;
        height: 21vh;
      }
    }

    .static {
      border: 2px solid black;
      padding: 10px;
    }
  }

  @media (max-width: 767px) {
    height: 160vh;

    h1 {
      font-size: 2.2rem;
      margin-left: 30px;
    }

    .wind-info {
      .wind-status,
      .humidity {
        width: 85%;
        height: 32vh;
        margin: 10px;

        h2 {
          font-size: 1.3rem;
        }
      }

      .wind-status {
        .w-speed {
          .wind-speed {
            font-size: 7rem;
          }
          .speed-unit {
            font-size: 1.8rem;
          }
        }

        .speed-direction {
          .speed-deg {
            font-size: 1.3rem;
          }
        }
      }

      .humidity {
        .h-percentage {
          font-size: 7rem;
        }
        .p-symbol {
          font-size: 1.8rem;
        }
      }
    }

    .air-info {
      .visibility,
      .pressure {
        width: 90%;
        height: 30vh;
        margin: 10px;
      }

      .visibility,
      .pressure {
        h2 {
          font-size: 1.3rem;
        }
        .figure {
          font-size: 6rem;
        }

        .caption {
          font-size: 1.3rem;
        }
      }
    }
  }

  @media (max-width: 480px) {
    height: 155vh;

    h1 {
      font-size: 1.8rem;
    }

    .wind-info {
      .wind-status,
      .humidity {
        width: 98%;
        height: 32vh;

        h2 {
          font-size: 1.1rem;
        }
      }

      .wind-status {
        .w-speed {
          .wind-speed {
            font-size: 6.5rem;
          }
          .speed-unit {
            font-size: 1.5rem;
          }
        }

        .speed-direction {
          .speed-deg {
            font-size: 1.2rem;
          }
        }
      }

      .humidity {
        .h-percentage {
          font-size: 6.5rem;
        }
        .p-symbol {
          font-size: 1.8rem;
        }
      }
    }

    .air-info {
      padding: 0px;
      .visibility,
      .pressure {
        width: 99%;
        height: 30vh;
      }
    }
  }

  @media (max-width: 320px) {
    height: 160vh;

    h1 {
      font-size: 2rem;
    }

    .wind-info {
      .wind-status,
      .humidity {
        width: 98%;
        height: 30vh;
      }

      .wind-status {
        .w-speed {
          .wind-speed {
            font-size: 4rem;
            font-weight: 600;
          }
          .speed-unit {
            font-size: 1.5rem;
          }
        }

        .speed-direction {
          .speed-deg {
            font-size: 1.2rem;
          }
        }
      }

      .humidity {
        .h-percentage {
          font-size: 4rem;
          font-weight: 600;
        }
        .p-symbol {
          font-size: rem;
        }
      }
    }

    .air-info {
      padding: 0px;

      .visibility,
      .pressure {
        h2 {
          font-size: 1.5em;
          font-weight: 500;
        }
        .figure {
          font-size: 3rem;
          font-weight: 600;
        }

        .caption {
          font-size: 1.5rem;
        }
      }
    }
  }
`;

export default function Highlights({ city, weatherData, celcius }) {
  const { data: foreCast, error, loading } = useFetchData(
    `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=0d9a54be6ed79bbc56fec4528ad25e92&units=${
      celcius ? "metric" : "imperial"
    }`,
    testForecast
  );

  const filter5Days = foreCast.list.filter(
    (item, index) => index % 8 === 0 || index === 39
  );
  filter5Days.splice(0, 1);

  const roundOff = (number) =>
    number > 0 ? Math.floor(number) : number.toFixed(1);

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

  const weatherIcons = {
    "01d": <IoIcons.IoMdSunny size="5em" />,
    "01n": <IoIcons.IoMdSunny size="5em" />,
    "02d": <IoIcons.IoIosPartlySunny size="5em" />,
    "02n": <IoIcons.IoIosPartlySunny size="5em" />,
    "03d": <FaIcons.FaCloud size="5em" />,
    "03n": <FaIcons.FaCloud size="5em" />,
    "04d": <WiIcons.WiCloudy size="5em" />,
    "04n": <WiIcons.WiCloudy size="5em" />,
    "09d": <FaIcons.FaCloudRain size="5em" />,
    "09n": <FaIcons.FaCloudRain size="5em" />,
    "10d": <GiIcons.GiRaining size="5em" />,
    "10n": <GiIcons.GiRaining size="5em" />,
    "11d": <mdIcons.IoThunderstormSharp size="5em" />,
    "11n": <mdIcons.IoThunderstormSharp size="5em" />,
    "13d": <GiIcons.GiSnowing size="5em" />,
    "13n": <GiIcons.GiSnowing size="5em" />,
    "50d": <RiIcons.RiHazeFill size="5em" />,
    "50n": <RiIcons.RiHazeFill size="5em" />,
  };
  if (error) throw error;
  return (
    <HighlightSection>
      <Section>
        {loading ? (
          <Spinner />
        ) : (
          filter5Days.map((day, index) => (
            <HighlightDiv key={index}>
              <h1>{followingDates[index]}</h1>
              {weatherIcons[day.weather[0].icon]}
              <div className="temp">
                <p className="max-temp">
                  {" "}
                  <BsIcons.BsFillCaretUpFill />
                  {roundOff(day.main.temp_max)}&deg;
                </p>
                <p className="min-temp">
                  {" "}
                  <BsIcons.BsFillCaretDownFill />
                  {roundOff(day.main.temp_min)}&deg;
                </p>
              </div>
            </HighlightDiv>
          ))
        )}
      </Section>

      <WindDiv>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <h1>Today's Highlights</h1>
            <section className="wind-info">
              <div className="wind-status">
                <h2>Wind Speed</h2>
                <div className="w-speed">
                  <span className="wind-speed">
                    {roundOff(weatherData.wind.speed)}
                  </span>
                  <span className="speed-unit">mph</span>
                </div>
                <div className="speed-direction">
                  <FaIcons.FaRegCompass size="2em" />{" "}
                  <span className="speed-deg">
                    {roundOff(weatherData.wind.deg)}&deg;
                  </span>
                </div>
              </div>

              <div className="humidity">
                <h2>Humidity</h2>
                <div>
                  <span className="h-percentage">
                    {roundOff(weatherData.main.humidity)}
                  </span>
                  <span className="p-symbol">%</span>
                </div>
                <div>
                  {0 + "% "}
                  <progress
                    value={roundOff(weatherData.main.humidity)}
                    max="100"
                  ></progress>
                  {` ${100}%`}
                </div>
              </div>
            </section>

            <section className="air-info">
              <div className="visibility">
                <h2>Visibility</h2>
                <div>
                  <span className="figure">
                    {visibilityToMiles(weatherData.visibility)}
                  </span>
                  <span className="caption">Miles</span>
                </div>
              </div>

              <div className="pressure">
                <h2>Air Pressure</h2>
                <div>
                  <span className="figure">{weatherData.main.pressure}</span>
                  <span className="caption">mb</span>
                </div>
              </div>
            </section>
          </>
        )}
      </WindDiv>
    </HighlightSection>
  );
}
