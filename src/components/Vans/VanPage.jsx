import React, { useState, useEffect } from "react";
import "./VanPage.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

const VanPage = () => {
  const { id } = useParams(); // Extract `id` from URL
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

  return van ? (
    <div className="vanpage">
      <Link to=".." relative="path">
        <i className="fa-solid fa-arrow-left"></i>
        Back to all vans
      </Link>
      <div>
        <img className="van-img" src={van.imageUrl} />
        <span className="van-cat">{van.type}</span>
        <h1 className="van-title">{van.name}</h1>
        <p className="van-pc">${van.price}/day</p>
        <p className="van-content"> {van.description}</p>
        <button className="van-rent-btn">Rent this van</button>
      </div>
    </div>
  ) : (
    <p>Loading</p>
  );
};

export default VanPage;
