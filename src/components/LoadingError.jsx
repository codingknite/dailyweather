import React from "react";
import support from "../img/support.svg";
import styled from "styled-components";

const Main = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .support {
    width: 50rem;
  }

  .text-one {
    font-size: 1.5rem;
    margin-top: 5vh;
    font-weight: 500;
  }

  .text-two {
    font-size: 1.3rem;
    margin-top: 4vh;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    .support {
      width: 30rem;
    }
  }

  @media (max-width: 480px) {
    .support {
      width: 20em;
    }

    .text-one {
      font-size: 1rem;
    }

    .text-two {
      font-size: 1rem;
    }
  }

  @media (max-width: 320px) {
    .support {
      width: 12em;
    }

    .text-one {
      font-size: 0.75em;
    }

    .text-two {
      font-size: 0.75rem;
    }
  }
`;

export default function LoadingError() {
  return (
    <Main>
      <div className="svg">
        <img src={support} alt="Support SVG" className="support" />
      </div>
      <h1 className="text-one">
        This shouldn't be happening. We're on our way{" "}
      </h1>
      <h2 className="text-two">In the mean time try reloading your browser</h2>
    </Main>
  );
}
