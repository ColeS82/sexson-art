import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HashRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from './components/Navbar/Navbar';
import MyWorks from './components/MyWorks/MyWorks';

export default function App() {
  return (
    <div>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path='myworks' element={<MyWorks />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </HashRouter>

    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);



