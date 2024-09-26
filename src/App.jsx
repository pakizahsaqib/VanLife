import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './components/Main';
import Signin from './components/Signin';
import About from './components/About';
import Vans from './components/Vans';
import VanPage from './components/VanPage';
import ErrorPage from './components/ErrorPage';
import './App.css';
import Vanlite from './components/Host/Vanlite';
import VanlitePage from './components/Host/VanlitePage';
import Transaction from './components/Host/Transaction';
import Header from './components/Host/Header';


import './server.js'
const App = () => {
  const [vanData, setVanData] = useState([]);
  useEffect(() => {
    fetch("/api/vans")
        .then(res => res.json())
        .then(data => setVanData(data))
        .catch(err => console.error("Error fetching data:", err));
}, []);


  return (
  
    

    <BrowserRouter>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans data={vanData} />} />
          <Route path="/vans/:id" element={<VanPage data={vanData.vans}  />} />
          <Route path="/admin" element={<Header data={vanData.vans}/>}/>
          <Route path="/allvans" element={<Vanlite/>} />
          <Route path="/allvans/:id" element={<VanlitePage data={vanData.vans} />} />
          <Route path="/transaction" element={<Transaction/>} />
          <Route path="*" element={<ErrorPage />} /> {/* Catch-all route for undefined paths */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

