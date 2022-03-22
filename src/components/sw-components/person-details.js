import React from "react";
import { ItemDetails, Record } from "../item-details";
import withSwapi from "../hoc";

const divideFunc = (swapi) => ({
  getData: swapi.getPerson,
  getImage: swapi.getPersonImage,
});

const PersonDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record label="Gender:" fieldName="gender" />
      <Record label="Birth year:" fieldName="birthYear" />
      <Record label="Eye color:" fieldName="eyeColor" />
      <Record label="Height:" fieldName="height" />
      <Record label="Mass:" fieldName="mass" />
    </ItemDetails>
  );
};

export default withSwapi(PersonDetails, divideFunc);
