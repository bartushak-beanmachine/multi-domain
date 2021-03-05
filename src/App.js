import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import "./App.css";

function App() {
  const [state, setState] = React.useState(null);

  React.useEffect(() => {
    if (window.location.origin.includes("kek.lines-of-stories.xyz")) {
      setState("kek");
    } else if (window.location.origin.includes("lol.lines-of-stories.xyz")) {
      setState("lol");
    } else {
      setState("wtf");
    }
  }, []);

  return (
    <div className="App">
      {state === "kek" ? (
        <RouterKek />
      ) : state === "lol" ? (
        <RouterLol />
      ) : (
        <div>WTF WTF WTF WTF WTF</div>
      )}
    </div>
  );
}

const RouterKek = () => {
  return (
    <Router>
      <h1>kek</h1>
      
      <div>
        <NavLink to="/" exact activeClassName="selected">
          Main
        </NavLink>
        <NavLink to="/home" activeClassName="selected">
          home
        </NavLink>
        <NavLink to="/wine" activeClassName="selected">
          wine
        </NavLink>
      </div>
      <Switch>
        <Route path="/" exact>
          <div className="a">Main page kek kek kek kek kek kek kek kek kek kek</div>
        </Route>
        <Route path="/home" exact>
          <div className="b">home page kek kek kek kek kek kek kek kek kek kek</div>{" "}
        </Route>
        <Route path="/wine" exact>
          <div className="c">wine page kek kek kek kek kek kek kek kek kek kek {window.location.origin}</div>{" "}
        </Route>
      </Switch>
    </Router>
  );
};

const RouterLol = () => {
  return (
    <Router>
      <h1>Lol</h1>

      <div>
        <NavLink to="/" exact activeClassName="selected">
          Main
        </NavLink>
        <NavLink to="/home" activeClassName="selected">
          home
        </NavLink>
        <NavLink to="/wine" activeClassName="selected">
          wine
        </NavLink>
      </div>
      <Switch>
        <Route path="/" exact>
          <div className="a">Main page lol lol</div>
        </Route>
        <Route path="/home" exact>
          <div className="b">home page lol lol</div>{" "}
        </Route>
        <Route path="/wine" exact>
          <div className="c">wine page lol lol </div>{" "}
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
