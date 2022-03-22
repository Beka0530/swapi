import React from "react";
import ItemList from "../item-list";
import withSwapi from "../hoc";

const divideFunc = (swapi) => ({
  getData: swapi.getAllPeople,
});
const PeopleList = (props) => {
  return <ItemList {...props}>{(item) => item.name}</ItemList>;
};

export default withSwapi(PeopleList, divideFunc);
