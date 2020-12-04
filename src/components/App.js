import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./Home";
import { RandomCat } from "./RandomCat";
import { About } from "./About";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./Header";
import "../App.css";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Header />
        <Switch>
          <Route path="/random-cat">
            <RandomCat />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
