import styled from "styled-components";
export const WrapperLightBox = styled.div`
  position: absolute;
  display: grid;
  place-items: center;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
  width: 100%;
  height: 100%;

  article {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: clamp(400px, 30vw, 600px);
    height: fit-content;

    & > button {
      position: absolute;
      display: grid;
      place-items: center;
      background-color: #fff;
      border: none;
      width: 50px;
      aspect-ratio: 1 / 1;
      padding: 1rem;
      border-radius: 50%;

      &:hover {
        cursor: pointer;
        & > svg > path {
          stroke: ${(props) => props.theme.colors.primary_orange};
        }
      }

      &:last-child {
        transform: translateX(50%);
        right: 0;
      }
      &:first-child {
        left: 0;
        transform: translateX(-50%);
      }
    }

    & > img {
      width: 100%;
      border-radius: 10px;
    }

    div.thumbailImages {
      position: relative;
      display: flex;
      justify-content: center;
      width: 80%;
      min-width: fit-content;
      gap: 20px;
      padding: 1em;
      & > div {
        position: relative;
        display: grid;
        place-items: center;
        width: calc(25% - 20px);
        min-width: 70px;
        border-radius: 0.75em;
        aspect-ratio: 1 / 1;
        &::after {
          position: absolute;
          content: "";
          border-radius: 0.6em;
          width: 100%;
          height: 100%;
          background-color: #ffffff7d;
          opacity: 0;
          z-index: -1;
        }
        &:hover {
          cursor: pointer;
          &::after {
            z-index: 0;
            opacity: 1;
            pointer-events: none;
          }
        }

        img {
          border-radius: 0.75em;
          width: 100%;
          transition: opacity 0.2s ease-out;
        }
        &:has(img.current) {
          border: 2px solid ${(props) => props.theme.colors.primary_orange};
          &::after {
            z-index: 0;
            opacity: 1;
          }
        }
      }
    }
  }
`;
