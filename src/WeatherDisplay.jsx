import React from "react";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";

export default function WeatherDisplay() {
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
        <WeatherTemp>15</WeatherTemp> <WeatherDeg>&deg;C</WeatherDeg>
      </Metrics>

      <br />
      <Cond>
        <h2>Raining</h2>
      </Cond>
      <br />

      <br />
      <Cond>
        <div>
          <span>Today</span> 02/02/2021
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
}
