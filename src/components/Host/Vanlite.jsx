import React from "react";
import "./Vanlite.css";
import List from "./List";

import { useOutletContext } from "react-router-dom";

const Vanlite = () => {
  const { vanData } = useOutletContext();
  return (
    <div className="vans-list">
      <h1>Your Listed Vans</h1>

      {vanData.map((item) => (
        <List key={item.id} data={item} />
      ))}
    </div>
  );
};
export default Vanlite;
