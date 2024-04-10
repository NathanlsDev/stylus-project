import { createGlobalStyle } from "styled-components";
import { BreakpointSize, BreakAt } from "./Breakpoints";

const colorYellow = "#ffc107";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  *, *:before, *:after{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  html{
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    font-size: 100%;
    color: #212121;
  }

  h1, h2, h3, h4, h5, h6{
    line-height: 1.3;
    font-weight: 700;
    letter-spacing: 2px;

    strong {
      color: ${colorYellow};
    }
  }

  h1{
    font-size: 2.5rem;

    ${BreakAt(BreakpointSize.lg)}{
      font-size: 3.75rem;
    }
  }

  h2{
    font-size: 2rem;

    ${BreakAt(BreakpointSize.lg)}{
      font-size: 3.125rem;
    }
  }

  h3{
    font-size: 1.9rem;

    ${BreakAt(BreakpointSize.lg)}{
      font-size: 2.5rem;
    }
  }

  h4{
    font-size: 1.3rem;
    font-weight: 600;

    ${BreakAt(BreakpointSize.lg)}{
      font-size: 2.125rem;
    }
  }
  
  h5{
    font-size: 1.2rem;
    font-weight: 300;

    ${BreakAt(BreakpointSize.lg)}{
      font-size: 1.5rem;
    }
  }

  h6{
    font-size: 1.1rem;
    font-weight: 600;

    ${BreakAt(BreakpointSize.lg)}{
      font-size: 1.25rem;
    }
  }
`;
