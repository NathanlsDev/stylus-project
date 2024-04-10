import styled, { css } from "styled-components";
import { BreakAt, BreakpointSize } from "./Breakpoints";

const colorYellow = "#ffc107";

export const Root = styled.header`
  color: #fff;
  padding: 100px 0;

  ${(props) => css`
    background: url(${props.image}), rgba(0, 0, 0, 0.4);
    background-size: cover;
    background-position: center;
    background-blend-mode: overlay;
  `}
`;

export const Container = styled.section`
  width: 100%;
  padding: 0 16px;

  ${BreakAt(BreakpointSize.xl)} {
    max-width: 1140px;
    padding: 0;
    margin: 0 auto;
  }
`;

export const Content = styled.div`
  ul {
    list-style: none;
  }

  p,
  li {
    font-size: 1.25rem;
  }

  li {
    &::before {
      content: "\\2713\\0020";
      color: ${colorYellow};
    }
  }
`;
