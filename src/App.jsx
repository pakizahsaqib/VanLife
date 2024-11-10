import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Signin from "./Pages/Signin.jsx";
import About from "./Pages/About.jsx";
import Vans from "./components/Vans/Vans.jsx";
import VanPage from "./components/Vans/VanPage.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";
import Vanlite from "./components/Host/Vanlite";
import VanlitePage from "./components/Host/VanlitePage";
import Transaction from "./components/Host/Transaction";
import Header from "./components/Host/Header";
import Dashboard from "./components/Host/Dashboard.jsx";
import Reviews from "./components/Host/Reviews.jsx";
import Details from "./components/Host/Details.jsx";
import Price from "./components/Host/Price.jsx";
import Photos from "./components/Host/Photos.jsx";
import Layout from "./components/Layout.jsx";
import "./server.js";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="signin" element={<Signin />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanPage />} />
          <Route path="admin" element={<Header />}>
            <Route index element={<Dashboard />} />
            <Route path="transaction" element={<Transaction />} />
            <Route path="review" element={<Reviews />} />
            <Route path="allvans" element={<Vanlite />} />
            <Route path="allvans/:id" element={<VanlitePage />}>
              <Route index element={<Details />} />
              <Route path="pricing" element={<Price />} />
              <Route path="photos" element={<Photos />} />
            </Route>
          </Route>
          <Route path="*" element={<ErrorPage />} />{" "}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
