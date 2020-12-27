import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./Home";
import { RandomCat } from "./RandomCat";
import { About } from "./About";
import Header from "./Header";
import "../App.css";

function App() {
  return (
    <Router basename="/clean-cat">
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
        <Route
          path="*"
          component={() => (
            <div align="center">
              404
              <br />
              <a href="/clean-cat" alt="home">
                go home
              </a>
            </div>
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
