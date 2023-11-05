import styled from "styled-components";
export const Wrapper = styled.div`
  position: absolute;
  right: 0;
  display: grid;
  grid-template-rows: auto auto 1fr;
  top: 100%;
  width: clamp(300px, 20vw, 400px);
  box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  min-height: 200px;
  gap: 10px;
  background-color: #fff;
  z-index: 50;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 1em;
    &.emptyCart {
      & > p {
        color: ${(props) => props.theme.colors.secondary_dark_grayishBlue};
        font-weight: ${(props) => props.theme.font.weight.bold};
      }
    }
    &:has(button) {
      button {
        width: 100%;
        padding: 1em;
        background-color: ${(props) => props.theme.colors.primary_orange};
        border: none;
        border-radius: 10px;
        color: white;
        font-weight: ${(props) => props.theme.font.weight.bold};
      }
      div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        gap: 10px;

        img {
          width: 50px;
          border-radius: 5px;
        }
        p {
          color: ${(props) => props.theme.colors.secondary_dark_grayishBlue};
          strong {
            color: black;
          }
        }
        button:last-child {
          background-color: transparent;
          width: 15px;
          padding: 0;
          img:last-child {
            width: 15px;

            &:hover {
              cursor: pointer;
            }
          }
        }
      }
    }
  }
  hr {
    background-color: ${(props) => props.theme.colors.secondary_grayishBlue};
    height: 1px;
  }
  h3 {
    padding: 1em;
  }

  @media screen and (max-width: 450px) {
    transform: translateX(20%);
  }
`;
