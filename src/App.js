import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import Terminal from "./components/terminal/terminal";
import Sidebar from "./components/sidebar/sidebar";
import Landing from "./components/landing/landing";

function App() {
  return (
    <div className="App">
      {/* <Sidebar></Sidebar>
      <Terminal></Terminal> */}
      <Landing></Landing>
    </div>
  );
}

export default App;
