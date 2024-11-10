import React from "react";
import { useOutletContext } from "react-router-dom";

const Price = () => {
  const { van } = useOutletContext();
  return (
    <div className="vanlite-pricing">
      <p>
        ${van.price}
        <span>/day</span>
      </p>
    </div>
  );
};

export default Price;
