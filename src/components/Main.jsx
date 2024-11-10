import React from "react";
import "./Main.css";
import Vans from "./Vans/Vans";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="main">
      <h1 className="main-title">
        You got the travel plans, we got the travel vans.
      </h1>
      <p className="main-text">
        Add adventure to your life by joining the <strong>#vanlife</strong>{" "}
        movement. Rent the perfect van to make your perfect road trip.
      </p>
      <Link to="/vans">
        <button className="main-btn">Find your van</button>
      </Link>
    </div>
  );
};

export default Main;
