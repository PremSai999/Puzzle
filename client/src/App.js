import Login from "./components/Login"
import Home from "./components/Home"
import Puzzle from './components/Puzzle'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./css/app.css"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/puzzle" image="https://img.huffingtonpost.com/asset/5d7f6af32400002e2a7bb417.jpeg?ops=scalefit_720_noupscale&format=webp" size ={4} element={<Puzzle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
