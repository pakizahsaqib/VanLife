import React from "react";
import "./Dashboard.css";
import Vanlite from "./Vanlite";
import { useOutletContext } from "react-router-dom";

const Dashboard = () => {
  const { vanData } = useOutletContext();
  return (
    <div className="dashboard">
      <div className="db-item1">
        <h1 className="welcome-msg">Welcome!</h1>
        <div className="db-item1-content">
          <p>
            Income Last <span>30 days</span>
          </p>
          <p>Details</p>
        </div>
        <h1 className="total-income">$2260</h1>
      </div>
      <div className="db-item2">
        <p>
          Review Score{" "}
          <span>
            <i class="fa-solid fa-star"></i>
          </span>{" "}
          5.0/5
        </p>
        <p>Details</p>
      </div>
      <Vanlite data={vanData} />
    </div>
  );
};

export default Dashboard;
