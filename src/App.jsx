import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from './pages/Home'
import Cart from './pages/Cart'
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div className="w-full h-screen bg-gray-100 font-sans">
        <div className="bg-slate-900 ">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
        <Toaster position="top-center"/>
      </div>
    </>
  );
}

export default App;
