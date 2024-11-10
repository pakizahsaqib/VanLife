import React from "react";
import { useOutletContext } from "react-router-dom";

const Photos = () => {
  const { van } = useOutletContext();

  return (
    <div className="vanlite-photos">
      <img className="vanlite-img" src={van.imageUrl} alt={van.name} />
    </div>
  );
};

export default Photos;
