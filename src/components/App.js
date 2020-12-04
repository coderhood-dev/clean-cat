import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./Home";
import { RandomCat } from "./RandomCat";
import { About } from "./About";
import Header from "./Header";
import "../App.css";

function App() {
  return (
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
  );
}

export default App;
