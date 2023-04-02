import React, { useState } from "react";
import "./App.css";

const colors = {
  green: "#00ff00",
  white: "#ffffff",
};

function App() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [output, setOutput] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    switch (input.toLowerCase()) {
      case "app":
        setHistory([
          ...history,
          { command: "app", output: "You have entered the App command." },
        ]);
        break;
      case "web":
        setHistory([
          ...history,
          { command: "web", output: "You have entered the Web command." },
        ]);
        break;
      case "research":
        setHistory([
          ...history,
          {
            command: "research",
            output: "You have entered the Research command.",
          },
        ]);
        break;
      case "management":
        setHistory([
          ...history,
          {
            command: "management",
            output: "You have entered the Management command.",
          },
        ]);
        break;
      case "design":
        setHistory([
          ...history,
          {
            command: "design",
            output: "You have entered the Design command.",
          },
        ]);
        break;
      case "cc":
        setHistory([
          ...history,
          {
            command: "cc",
            output: "You have entered the CC command.",
          },
        ]);
        break;
      case "help":
        setHistory([
          ...history,
          {
            command: "help",
            output:
              "Available commands: app, web, research, management, design, cc",
          },
        ]);
        break;
      default:
        setHistory([
          ...history,
          {
            command: input,
            output: "Command not found. Type 'help' for a list of commands.",
          },
        ]);
        break;
    }
    setInput("");
  };

  return (
    <div className="App">
      {history.map((item, index) => (
        <div key={index}>
          <span>user@acm-mainframe${item.command}</span>
          <br />
          <span>{item.output}</span>
          <br />
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <label>
          <span>user@acm-mainframe$</span>
        </label>
        <input
          className="command-input"
          type="text"
          value={input}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}

export default App;
