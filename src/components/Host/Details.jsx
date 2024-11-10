import React from "react";
import { useOutletContext } from "react-router-dom";

const Details = () => {
  const { van } = useOutletContext();

  return van ? (
    <div className="vanlite-details">
      <p>
        <strong>Name: </strong>
        {van.name}
      </p>
      <p>
        <strong>Category: </strong>
        {van.type.charAt(0).toUpperCase() + van.type.slice(1).toLowerCase()}
      </p>
      <p>
        <strong>Description:</strong>
        {van.description}
      </p>
      <p>
        <strong>Visibility:</strong> Public
      </p>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default Details;
