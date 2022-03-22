import React, { useState } from "react";
import PlanetList from "../planet-list";
import { PlanetDetails } from "../planet-details";
import Row from "../row";

const PlanetsPage = () => {
  console.log("test");

  const [selectedItemId, setSelectedItemId] = useState(1);

  const leftElement = <PlanetList setSelectedItemId={setSelectedItemId} />;
  const rightElement = <PlanetDetails selectedItemId={selectedItemId} />;

  return <Row left={leftElement} right={rightElement} />;
};

export default PlanetsPage;
