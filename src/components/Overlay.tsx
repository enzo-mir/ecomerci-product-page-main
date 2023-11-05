import styled from "styled-components";

export const Overlay = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);
  @media screen and (max-width: 930px) {
    display: block;
  }
`;
