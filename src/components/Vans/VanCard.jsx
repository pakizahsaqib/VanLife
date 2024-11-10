import React from "react";
import "./VanCard.css";
import { Link } from "react-router-dom";

const VanCard = ({ data }) => {
  return (
    <Link to={data.id}>
      <div className="vancard">
        <img className="vancard-img" src={data.imageUrl} alt={data.name} />
        <div className="van-details">
          <p className="van-name">{data.name}</p>
          <p className="van-price">
            ${data.price}
            <br />
            <span>/day</span>
          </p>
        </div>

        <span className="van-cat">{data.type}</span>
      </div>
    </Link>
  );
};

export default VanCard;
