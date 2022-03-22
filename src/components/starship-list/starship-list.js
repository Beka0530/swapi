import React, { useState, useEffect, useContext } from "react";
import { Context } from "../swapi-context";

const StarshipList = ({ setSelectedItemId }) => {
  const [data, setData] = useState([]);
  const swapi = useContext(Context);

  useEffect(() => {
    swapi
      .getAllStarships()
      .then((data) => setData(data))
      .catch((error) => error);
  }, []);

  const elements = data.map((starship) => {
    return (
      <li
        key={starship.id}
        className="list-group-item"
        onClick={() => setSelectedItemId(starship.id)}
      >
        {starship.name}
      </li>
    );
  });

  return <ul className="item-list list-group">{elements}</ul>;
};

export default StarshipList;
