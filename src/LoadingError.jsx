import React from "react";
import support from "./support.svg";
import styled from "styled-components";

const Main = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  .support {
    width: 60rem;
  }

  .text-one {
    margin-top: 5vh;
    font-weight: 500;
  }

  .text-two {
    margin-top: 4vh;
    font-weight: 500;
  }
`;

export default function LoadingError() {
  return (
    <Main>
      <div>
        <img src={support} alt="Support SVG" className="support" />
      </div>
      <h1 className="text-one">
        This shouldn't be happening. We're on our way{" "}
      </h1>
      <h2 className="text-two">In the mean time try reloading your browser</h2>
    </Main>
  );
}
