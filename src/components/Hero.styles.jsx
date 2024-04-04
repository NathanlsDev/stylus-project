import styled, { css } from "styled-components";

export const Root = styled.header`
  color: #fff;

  ${(props) => css`
    background: url(${props.image}), rgba(0, 0, 0, 0.4);
    background-size: cover;
    background-position: center;
    background-blend-mode: overlay;
  `}
`;

export const Title = styled.h1`
  font-weight: 700;
  letter-spacing: 0.125rem;
`;

export const Content = styled.div`
  p,
  li {
    font-size: 1.25rem;
  }

  ul {
    list-style: none;
  }

  li::before {
    content: "\\2713\\0020";
  }
`;
