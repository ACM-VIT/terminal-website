import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import Terminal from "./components/terminal/terminal";
import Sidebar from "./components/sidebar/sidebar";

import Faq from "./components/Faq/Faq"

function App() {
  return (
    <div className="App">
      <Sidebar></Sidebar>
      <Terminal></Terminal>
      {/* <Faq /> */}
    </div>
  );
}

export default App;
