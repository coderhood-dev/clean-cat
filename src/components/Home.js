import { Link } from "react-router-dom";
import {Link as ChakraLink} from "@chakra-ui/react"
import catLogo from "../assets/cat-clean-256.png";

export const Home = () => {
  return (
    <div className="App">
        <header className="App-header">
          <img src={catLogo} alt="cat logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <ChakraLink 
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </ChakraLink>
        </header>
      </div>
  );
};
