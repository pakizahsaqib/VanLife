import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <h1>
          <Link to="/">#VANLIFE</Link>
        </h1>
        <ul>
          <li>
            <NavLink
              to="signin"
              className={({ isActive }) => (isActive ? "activeLink" : null)}
            >
              Host
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about"
              className={({ isActive }) => (isActive ? "activeLink" : null)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="vans"
              className={({ isActive }) => (isActive ? "activeLink" : null)}
            >
              Vans
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
