import React, { useState, useEffect } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

const VanlitePage = () => {
  const { id } = useParams();
  const [van, setVan] = useState(null);
  useEffect(() => {
    const fetchVanData = async () => {
      try {
        const response = await axios.get(`/api/vans/${id}`);
        setVan(response.data.vans);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchVanData();
  }, []);
  return (
    <div className="vanlite">
      <i className="fa-solid fa-arrow-left"></i>
      <Link to=".." relative="path">
        Back to all vans
      </Link>
      <div className="vanlite-wrapper">
        {van ? (
          <>
            <div className="vanlite-header">
              <img src={van.imageUrl} alt={van.name} />
              <div>
                <span className="van-cat">{van.type}</span>
                <h1>{van.name}</h1>
                <p>${van.price}/day</p>
              </div>
            </div>
            <ul>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "activeLink" : null)}
                  to={"."}
                  end
                >
                  Details
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "activeLink" : null)}
                  to={"pricing"}
                >
                  Pricing
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "activeLink" : null)}
                  to={"photos"}
                >
                  Photos
                </NavLink>
              </li>
              <li id="editIcon">
                <i className="fa-regular fa-pen-to-square"></i>
              </li>
            </ul>
            <Outlet context={{ van }} />
          </>
        ) : (
          <p>Loading ... </p>
        )}
      </div>
    </div>
  );
};

export default VanlitePage;
