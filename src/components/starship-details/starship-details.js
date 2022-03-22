import React, { useState, useEffect, useContext } from "react";
import { Context } from "../swapi-context";

const Record = ({ label, fieldName, data }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{data[fieldName]}</span>
    </li>
  );
};
const StarshipDetails = ({ selectedItemId }) => {
  const [data, setData] = useState({});
  const swapi = useContext(Context);

  useEffect(() => {
    swapi
      .getStarship(selectedItemId)
      .then((data) => setData(data))
      .catch((error) => error);
  }, [selectedItemId]);

  const {
    id,
    name,
    model,
    manufacturer,
    costInCredits,
    length,
    crew,
    passengers,
    cargoCapacity,
  } = data;
  const imageUrl = `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;

  return (
    <div className="person-details card">
      <img className="person-image" src={imageUrl} />
      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Model:</span>
            <span>{model}</span>
          </li>
          <li className="list-group-item">
            <span className="term">ManuFacturer:</span>
            <span>{manufacturer}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Cost InCredits:</span>
            <span>{costInCredits}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Length:</span>
            <span>{length}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Crew:</span>
            <span>{crew}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Passengers:</span>
            <span>{passengers}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Cargo Capacity:</span>
            <span>{cargoCapacity}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { StarshipDetails, Record };
