import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap');
*,*::after,*::before{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html,body{
width: 100%;
height: 100%;
}

body{
    background-color: #fff;
    font-family: ${(props) => props.theme.font.family};
}

@media (pointer: fine) {
    button:hover{
        cursor: pointer;
    }
}

`;
export default GlobalStyle;
