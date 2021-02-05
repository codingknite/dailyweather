import React from "react";
import * as FaIcons from "react-icons/fa";
import styled from "styled-components";

const Section = styled.section`
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

export default function WindHighlight() {
  return (
    <WindHighlight>
      <h2>Today's Highlights</h2>
      <div className="wind-info">
        <div className="static">
          <h3>Wind Status</h3>
          <div>
            7 <span>mph</span>
          </div>
          <div>
            <FaIcons.FaRegCompass /> <span>NWE</span>
          </div>
        </div>

        <div className="static">
          <h3>Humidity</h3>
          <div>
            7 <span>%</span>
          </div>
          <div></div>
        </div>

        <div className="static">
          <h3>Visibility</h3>
          <div>
            6,4 <span>Miles</span>
          </div>
        </div>

        <div className="static">
          <h3>Air Pressure</h3>
          <div>
            998 <span>mb</span>
          </div>
        </div>
      </div>
    </WindHighlight>
  );
}
