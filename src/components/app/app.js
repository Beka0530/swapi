import React from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { PeoplePage } from "../pages";
import PlanetPage from "../pages/planets-page";
import StarshipPage from "../pages/starship-page";
import { Context } from "../swapi-context";
import SwapiService from "../../services/swapi-service";
import "./app.css";

const swapi = new SwapiService();

const App = () => {
  return (
    <div>
      <Context.Provider value={swapi}>
        <Router>
          <Header />
          <RandomPlanet />
          <Route
            path="/"
            exact={true}
            render={() => <h1>Hello People!!!</h1>}
          ></Route>
          <Route path="/people" component={PeoplePage}></Route>
          <Route path="/planets" component={PlanetPage}></Route>
          <Route path="/starships" component={StarshipPage}></Route>
        </Router>
      </Context.Provider>
    </div>
  );
};

export default App;
