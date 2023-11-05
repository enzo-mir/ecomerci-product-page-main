import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import GlobalStyle from "./styles/GlobalStyle.tsx";
import { ThemeProvider } from "styled-components";
import dataStyle from "./styles/json_file/globalStyle.json";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={dataStyle}>
    <GlobalStyle />
    <App />
  </ThemeProvider>
);
