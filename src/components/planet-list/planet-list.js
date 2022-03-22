import React, { useState, useEffect, useContext } from "react";
import { Context } from "../swapi-context";
import "./planet-list.css";

const PlanetList = ({ setSelectedItemId }) => {
  const [data, setData] = useState([]);
  const swapi = useContext(Context);

  useEffect(() => {
    swapi
      .getAllPlanets()
      .then((data) => setData(data))
      .catch((error) => error);
  }, []);

  const elements = data.map((planet) => {
    return (
      <li
        key={planet.id}
        className="list-group-item"
        onClick={() => setSelectedItemId(planet.id)}
      >
        {planet.name}
      </li>
    );
  });

  return <ul className="item-list list-group">{elements}</ul>;
};

export default PlanetList;
