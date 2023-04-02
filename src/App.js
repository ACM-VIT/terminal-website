import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import Terminal from "./components/terminal/terminal";
import Sidebar from "./components/sidebar/sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar></Sidebar>
      <Terminal></Terminal>
    </div>
  );
}

export default App;
