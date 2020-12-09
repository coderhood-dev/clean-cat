import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import SessionProvider from "./utils/context";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      {/* Todos los componenetes hijos del SessionProvider tienen acceso a los
          datos dentro del Context */}
      <SessionProvider>
        <App />
      </SessionProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
