import React, { useState, useEffect } from "react";
import "./Header.css";
import { NavLink, Outlet } from "react-router-dom";
import axios from "axios";

const Header = () => {
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

  const activeStyle = {
    color: "#000",
    fontWeight: "700",
  };
  return (
    <>
      <div className="header">
        <ul>
          <li>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : null)}
              to="."
              end
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : null)}
              to="transaction"
            >
              Income
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : null)}
              to="allvans"
            >
              Vans
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : null)}
              to="review"
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet context={{ vanData }} />
    </>
  );
};

export default Header;
