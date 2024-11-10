import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Vans.css";
import VanCard from "./VanCard";
import axios from "axios";

const Vans = () => {
  const [vanData, setVanData] = useState([]);
  useEffect(() => {
    const fetchVanData = async () => {
      try {
        const response = await axios.get("/api/vans");
        setVanData(response.data.vans);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchVanData();
  }, []);

  return (
    <div className="vans">
      <h1 className="vans-header">Explore our van options</h1>

      {/* Filters */}
      <div className="vans-filter">
        <span>
          <NavLink to="/vans:type">Simple</NavLink>
        </span>
        <span>
          <NavLink to="/vans:type">Luxury</NavLink>
        </span>
        <span>
          <NavLink to="/vans:type">Rugged</NavLink>
        </span>
        <NavLink to=".">Clear filters</NavLink>
      </div>

      {/* Van Cards */}
      {vanData ? (
        <div className="card-container">
          {vanData.map((item) => (
            <VanCard key={item.id} data={item} id={item.data} />
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Vans;
