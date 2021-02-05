import React from "react";
import * as FaIcons from "react-icons/fa";
import styled from "styled-components";

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
    justify-content: space-between;
  }
`;

export default function Highlight() {
  return (
    <HighlightDiv>
      <h4 className="day">Tomorrow</h4>
      <FaIcons.FaCloudRain size="3em" />
      <div className="temp">
        <p className="max-temp">16&deg;</p>
        <p className="min-temp">11&deg;</p>
      </div>
    </HighlightDiv>
  );
}
