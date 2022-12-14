import styled from "styled-components";

export const ParentDiv = styled("div")`
  position: relative;
  margin-top: 20px;
  width: 100%;
  height: 6px;
  background-color: #fdba2c;
  div {
    content: "";
    display: inline;
    position: absolute;
    width: 0;
    height: 100%;
    left: 50%;
    text-align: center;
  }
  div:nth-child(1) {
    background-color: #da4733;
    animation: loading 3s linear infinite;
  }
  div:nth-child(2) {
    background-color: #3b78e7;
    animation: loading 3s linear 1s infinite;
  }
  div:nth-child(3) {
    background-color: #fdba2c;
    animation: loading 3s linear 2s infinite;
  }
  @keyframes loading {
    from {
      left: 0;
      width: 0;
      z-index: 100;
    }
    33.3333% {
      left: 0;
      width: 100%;
      z-index: 10;
    }
    to {
      left: 0;
      width: 100%;
    }
  }
`;
