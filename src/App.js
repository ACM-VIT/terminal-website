import React, { useRef, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import "./App.css";
import Terminal from "./components/terminal/terminal";
import Landing from "./components/landing/landing";
import FAQ from "./components/FAQ/Faq";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/terminal" element={<Terminal/>} />
          <Route path="/Faq" element={<FAQ/>} />
          <Route path="/landing" element={<Landing/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
