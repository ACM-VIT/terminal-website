import React, { useRef, useEffect, useState } from "react";
import "./App.css";

// const colors = {
//   green: "#00ff00",
//   white: "#ffffff",
// };

// function sleep(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

function App() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [timeLeft, setTimeLeft] = useState(10);

  const inputRef = useRef(null);

  const terminalText = "user@acm-mainframe$ ";
  const researchText =
    "The research domain in ACM covers a broad range of technical concepts, including artificial intelligence, computer systems, cybersecurity, databases, human-computer interaction, programming languages, and software engineering, among others";
  const managementText =
    "The management domain in ACM is responsible for organizing successful events, conferences, and activities. They develop timelines, manage finances, outreach, and sponsorship efforts, and serve as the face of the chapter. Their role is critical to the success of any event, and they work to create engaging and informative experiences that promote the growth of the computing community.";
  const designText =
    "The design domain in ACM creates visually appealing designs for apps, web platforms, posters, and promotional content. Experts in motion graphics, UI-UX, and graphic design work together to make ACM stuff pretty and align with the chapter's goals. Their designs help attract attendees, sponsors, and volunteers and represent the chapter's brand and vision.";
  const webText =
    "The web domain in ACM creates visually appealing and functionally effective websites for promoting ACM and its events. They specialize in frontend, backend, and full-stack development, supporting various tech stacks. Their goal is to create cool websites (like this one!) with good performance and SEO strategies to attract potential attendees and sponsors, hence making the event successful";
  const appText =
    "The app domain in ACM creates innovative, user-friendly, and feature-rich apps for Android and iOS. They specialize in Flutter, Kotlin, and Swift and can develop event-specific apps. Their goal is to provide an exciting and interactive experience for users and optimize performance and usability.";
  const ccText =
    "The competitive coding domain in ACM solves complex coding problems and enhances problem-solving skills. They work with the research domain to create innovative problems for participants, host events, and represent ACM in other coding competitions. The domain is known for their participation in the ACM ICPC and designs questions for ACM's RC events. \n\nWe will be hosting a Competitive Coding event on <date> on Hackerrank. Stay Tuned!";
  const helpText =
    "Available commands: app, web, research, management, design, cc ,clear";
  const defaultText = "Command not found. Type 'help' for a list of commands.";
  const enterText = "\nRedirecting to the form in 5 seconds...";

  var chosenDomain = "none";

  document.addEventListener("keydown", function (event) {
    if (event.code === "Enter" && chosenDomain !== "none") {
      console.log(chosenDomain);
    }
  });

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const timeout = 5000;

  const handleSubmit = async (event) => {
    event.preventDefault();

    switch (input.toLowerCase()) {
      case "app":
        setHistory([
          ...history,
          { command: "app", output: appText + enterText },
        ]);

        chosenDomain = "app";

        // await sleep(10000);

        setTimeout(() => {
          window.open("https://forms.gle/JNK5qL9xKHvLY4bz7");
        }, timeout);

        break;
      case "web":
        setHistory([
          ...history,
          { command: "web", output: webText + enterText },
        ]);

        chosenDomain = "web";

        // await sleep(10000);

        setTimeout(() => {
          window.open("https://forms.gle/sj1uQdbeBomkSsPY9");
        }, timeout);

        break;
      case "research":
        setHistory([
          ...history,
          {
            command: "research",
            output: researchText + enterText,
          },
        ]);

        setTimeout(() => {
          window.open("https://forms.gle/Cn7W34sdAWXPEZat6");
        }, timeout);

        chosenDomain = "research";
        // await sleep(10000);
        break;
      case "management":
        setHistory([
          ...history,
          {
            command: "management",
            output: managementText + enterText,
          },
        ]);

        setTimeout(() => {
          window.open("https://forms.gle/LmDaj8hMqdoUFuGW7");
        }, timeout);

        chosenDomain = "management";
        // await sleep(10000);
        break;
      case "design":
        setHistory([
          ...history,
          {
            command: "design",
            output: designText + enterText,
          },
        ]);

        chosenDomain = "design";
        // await sleep(10000);

        setTimeout(() => {
          window.open("https://forms.gle/W9b61kCkJ4JDkCBG6");
        }, timeout);

        break;
      case "cc":
        setHistory([
          ...history,
          {
            command: "cc",
            output: ccText,
          },
        ]);

        chosenDomain = "cc";
        // await sleep(10000);
        break;
      case "help":
        setHistory([
          ...history,
          {
            command: "help",
            output: helpText,
          },
        ]);
        break;

      case "clear":
        setHistory([]);
        break;
      default:
        setHistory([
          ...history,
          {
            command: input,
            output: defaultText,
          },
        ]);
        break;
    }
    setInput("");
    chosenDomain = "none";
  };

  return (
    <div className="App">
      {history.map((item, index) => (
        <div key={index} className="terminal-input">
          <span>
            {terminalText}
            {item.command}
          </span>
          <br />
          <span>{item.output}</span>
          <br />
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <label className="terminal-prompt">
          <span>{terminalText}</span>
        </label>
        <input
          className="terminal-input"
          type="text"
          ref={inputRef}
          value={input}
          onChange={handleInputChange}
        />
      </form>
      <br />
    </div>
  );
}

export default App;
