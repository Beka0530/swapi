import React, { useState } from "react";
import StarshipList from "../starship-list";
import { StarshipDetails } from "../starship-details";
import Row from "../row";

const StarshipPage = () => {
  const [selectedItemId, setSelectedItemId] = useState(1);

  const leftElement = <StarshipList setSelectedItemId={setSelectedItemId} />;
  const rightElement = <StarshipDetails selectedItemId={selectedItemId} />;

  return <Row left={leftElement} right={rightElement} />;
};

export default StarshipPage;
