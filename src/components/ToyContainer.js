import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, handleDelete, handleUpdate }) {

  const toyCards = toys.map((toy) =>( <ToyCard handleUpdate={handleUpdate} handleDelete={handleDelete} key={toy.id} toys={toy}/>))
  return (
    <div id="toy-collection">{toyCards}</div>
  );
}

export default ToyContainer;
