import styled from "styled-components";

const HeaderStyle = styled.header`
  width: 100%;
  height: fit-content;
  display: grid;
  place-items: center;
  nav {
    position: relative;
    display: grid;
    grid-template-columns: auto auto 1fr;
    gap: 50px;
    place-items: center;
    width: 75%;
    height: 100px;
    &::after {
      position: absolute;
      bottom: 0;
      content: "";
      width: 100%;
      height: 1px;
      background-color: ${(props) => props.theme.colors.secondary_grayishBlue};
    }
    > span {
      display: none;
    }
  }
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: 2em;

    &:not(:last-child, :first-child) {
      li {
        &::after {
          transition: all 0.1s ease-in;
          position: absolute;
          content: "";
          bottom: 0px;
          width: 100%;
          background-color: ${(props) => props.theme.colors.primary_orange};
          height: 0px;
        }
        &:hover {
          &::after {
            height: 5px;
          }
        }
      }
    }
    &:nth-child(3) {
      & li:first-child {
        display: none;
      }
    }

    li {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      list-style-type: none;

      a {
        text-decoration: none;
        color: ${(props) => props.theme.colors.secondary_dark_grayishBlue};
        h1 {
          color: ${(props) => props.theme.colors.secondary_darkBlue};
          font-size: 1.7em;
        }
      }
    }
    &:last-child {
      margin-left: auto;
      li {
        height: 100%;
        a {
          &:focus {
            outline: 0.1rem solid
              ${(props) => props.theme.colors.primary_orange};
            border-radius: 50%;
          }
          img {
            width: 50px;
          }
        }
        &:first-child {
          & > button {
            position: relative;
            background-color: transparent;
            border: none;
            span {
              position: absolute;
              top: -5px;
              right: -5px;
              color: white;
              padding-inline: 0.3rem;
              border-radius: 10px;
              background-color: ${(props) => props.theme.colors.primary_orange};
            }
            :hover {
              cursor: pointer;
            }
            img {
              width: 20px;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 930px) {
    nav {
      width: 100%;
      height: 75px;
      padding-inline: 1em;

      &::after {
        background-color: transparent;
      }
      > span {
        display: flex;
        justify-content: center;
        align-items: center;

        button {
          background-color: transparent;
          border: none;
          :hover {
            cursor: pointer;
          }
        }
      }
      & > ul:last-child > li > a > img {
        width: 30px;
      }

      &.display ul:nth-child(3) {
        padding-left: 20px;
        width: clamp(250px, 50vw, 500px);
      }

      ul li::after {
        display: none;
      }

      ul:nth-child(3) {
        position: absolute;
        flex-direction: column;
        align-items: flex-start;
        justify-content: start;
        top: 0;
        left: 0;
        width: 0vw;
        height: 100vh;
        transition: all 0.2s ease-out;
        padding-left: 0px;
        background-color: #fff;
        overflow: hidden;
        z-index: 50;
        button {
          background-color: transparent;
          border: none;
          :hover {
            cursor: pointer;
          }
        }
        li {
          a {
            color: black;
            font-weight: ${(props) => props.theme.font.weight.bold};
          }

          height: fit-content;
          &:first-child {
            height: 75px;
            display: grid;
            place-items: center;
          }
        }
      }
    }
  }
`;
const MainStyle = styled.main`
  display: grid;
  justify-content: center;
  justify-items: end;
  grid-template-columns: 0.8fr 1fr;
  width: fit-content;
  padding-block: 100px;
  gap: 5em;

  & > article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    width: 65%;
    padding-inline: 2em;
    min-width: 350px;
    & > button {
      display: none;
    }
    & > img {
      width: 100%;
      border-radius: 1em;
    }
    div.thumbailImages {
      position: relative;
      display: flex;
      width: 100%;
      gap: 20px;
      & > div {
        position: relative;
        display: grid;
        place-items: center;
        width: calc(25% - 15px);
        min-width: 50px;
        border-radius: 0.75em;
        aspect-ratio: 1 / 1;
        img {
          border-radius: 0.75em;
          width: 100%;
          transition: opacity 0.2s ease-out;
          &:not(.current):hover {
            opacity: 0.3;
            cursor: pointer;
          }
          &.current {
            filter: opacity(30%);
          }
        }
        &:has(img.current) {
          border: 2px solid ${(props) => props.theme.colors.primary_orange};
        }
      }
    }
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-right: auto;
    min-width: 350px;
    width: 45%;
    gap: 20px;
    h2 {
      font-size: 2.5em;
    }
    b {
      color: ${(props) => props.theme.colors.primary_orange};
      font-weight: ${(props) => props.theme.font.weight.bold};
      font-size: 0.75em;
    }
    p {
      color: ${(props) => props.theme.colors.secondary_dark_grayishBlue};
      line-height: 1.75rem;
      padding-block: 1em;
    }
    div.price {
      display: grid;
      align-items: center;
      grid-template-columns: auto auto;
      gap: 10px;
      strong {
        font-size: 1.5em;
      }
      b {
        padding: 0.2em;
        background-color: ${(props) => props.theme.colors.primary_pale};
        border-radius: 0.2em;
      }
      sub {
        text-decoration: line-through;
        color: ${(props) => props.theme.colors.secondary_grayishBlue};
      }
    }

    div.buySection {
      display: flex;
      width: 100%;
      gap: 10px;
      div.quantity {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        background-color: ${(props) =>
          props.theme.colors.secondary_light_grayishBlue};
        padding: 0.5em;
        button {
          font-size: 1.2em;
          background-color: transparent;
          border: none;
          color: ${(props) => props.theme.colors.primary_orange};
          padding-inline: 10px;
          height: 100%;
          &:hover {
            cursor: pointer;
          }
        }
      }
      & > button {
        display: flex;
        justify-content: center;
        gap: 10px;
        align-items: center;
        background-color: ${(props) => props.theme.colors.primary_orange};
        border: none;
        color: white;
        border-radius: 0.5rem;
        padding: 1em;
        width: 100%;
        @media (pointer: fine) {
          &:hover {
            cursor: pointer;
            opacity: 0.5;
          }
        }
        &:active {
          cursor: pointer;
          opacity: 0.5;
        }
        > svg {
          scale: 0.75;
        }
      }
    }
  }

  @media screen and (max-width: 930px) {
    grid-template-rows: auto 1fr;
    gap: 20px;
    grid-template-columns: 1fr;
    place-items: center;
    padding-block: 0;

    & > article {
      position: relative;
      > img {
        width: 100%;
        object-fit: cover;
        pointer-events: none;
      }
      & div.thumbailImages {
        display: none;
      }

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

        &:active {
          cursor: pointer;
          & > svg > path {
            stroke: ${(props) => props.theme.colors.primary_orange};
          }
        }

        &:last-child {
          right: 0;
        }
        &:first-child {
          left: 0;
        }
      }
    }

    & > section {
      padding: 1em 5em;
      width: 100%;

      & h2 {
        font-size: 1.75em;
      }

      & > p {
        padding-block: 0;
      }

      div.buySection {
        flex-direction: column;
        width: clamp(250px, 40%, 400px);

        & div.quantity {
          justify-content: space-between;
          font-size: 1.2em;
        }
      }
    }
  }
  @media screen and (max-width: 450px) {
    & > article {
      width: 100%;
      border-radius: 0px;
      padding: 0;
      img {
        border-radius: 0;
        max-height: 40vh;
      }
      & > button {
        padding: 0px;
        width: 40px;
        height: 40px;

        &:last-child {
          right: 10px;
        }
        &:first-child {
          left: 10px;
        }

        & > svg {
          scale: 0.75;
        }
      }
    }
    & > section {
      padding: 0 1em;
      div.price {
        grid-template-columns: auto auto 1fr;
        width: 100%;

        sub {
          margin-left: auto;
        }
      }
      div.buySection {
        width: 100%;
      }
    }
  }
`;

export { HeaderStyle, MainStyle };
