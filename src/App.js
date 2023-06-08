import { BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Navbar />
      <Home />
    </Routes>
      </BrowserRouter>
  );
}

export default App;
