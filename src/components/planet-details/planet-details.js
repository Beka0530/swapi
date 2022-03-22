import React, { useState, useEffect, useContext } from "react";
import { Context } from "../swapi-context";
import "./planet-details.css";

const Record = ({ label, fieldName, data }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{data[fieldName]}</span>
    </li>
  );
};
const PlanetDetails = ({ selectedItemId }) => {
  const [data, setData] = useState({});
  const swapi = useContext(Context);

  useEffect(() => {
    swapi
      .getPlanet(selectedItemId)
      .then((data) => setData(data))
      .catch((error) => error);
  }, [selectedItemId]);

  const { id, name, population, rotationPeriod, diameter, climate, gravity } =
    data;
  const imageUrl = `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;

  return (
    <div className="person-details card">
      <img className="person-image" src={imageUrl} />
      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population:</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period:</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter:</span>
            <span>{diameter}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Climate:</span>
            <span>{climate}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Gravity:</span>
            <span>{gravity}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { PlanetDetails, Record };
