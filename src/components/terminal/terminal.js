import React, { useRef, useEffect, useState } from "react";
import "./terminal.css";
import Sidebar from "../sidebar/sidebar";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyARMgwYW321uYtjkSdr-4-zjZ9w2KT9IuM",
  authDomain: "acm-recruitments-2023-24.firebaseapp.com",
  projectId: "acm-recruitments-2023-24",
  storageBucket: "acm-recruitments-2023-24.appspot.com",
  messagingSenderId: "386640585508",
  appId: "1:386640585508:web:a8c62c1d3dd806338489b1",
  measurementId: "G-GBDP1TW3F3",
});

//initialise db
const firestore = firebase.firestore();
const terminal_messages = firestore.collection("terminal_messages");

const storeInput = async (input) => {
  const snapshot = await terminal_messages.get();
  await terminal_messages.add({
    input: input,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    inputNumber: snapshot.size,
  });
  // console.log(snapshot.size);
};

function Terminal() {
  const whoisText = `
  Welcome to Association for Computing Machinery, VIT!

  ACM-VIT, one of the most reputed and distinguished technical chapter in
  VIT, Vellore has been working with vision and determination since it’s inception
  in 2009, with the aspirations of advancement of computer science as a science and 
  a profession. We are not just an organization, we are a family, united by one 
  cause, working towards making technology more accessible much like our parent 
  organization, ACM.

  Get ready to embark on this journey with us!

  Type 'help' for a list of commands. We have a few secrets put away for you too.  

  Please allow popups in your browser for the form to open.
  Use your VIT email ID to register for the forms.
  `;

  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    { command: "whois", output: whoisText },
  ]);

  const inputRef = useRef(null);

  const historyEndRef = useRef(null);

  const scrollToBottom = () => {
    historyEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const terminalText = "[user@acm-mainframe]~$ ";

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
    "The competitive coding domain in ACM solves complex coding problems and enhances problem-solving skills. They work with the research domain to create innovative problems for participants, host events, and represent ACM in other coding competitions. The domain is known for their participation in the ACM ICPC and designs questions for ACM's RC events. \n\nWe will be hosting a Competitive Coding event soon. Stay Tuned!";
  const helpText = `Available commands: 
     - app
     - web 
     - research 
     - management 
     - design
     - cc
     - clear 
     - events 
     - whois
     - help
     `;
  const defaultText = "Command not found. Type 'help' for a list of commands.";
  const enterText = "\nRedirecting to the form in 5 seconds...";

  const events = ` 
   - Reverse Coding is our competitive coding event with a twist.

   - Code2Create is our flagship event. It is one of VIT's biggest hackathons, where students all across India compete to win.

   - Tiny Hack is our problem solving sprit where participants come up with tiny ideas that make a huge impact.

   - Forktober is an event initiative by ACMVIT to take forward open source development among budding developers.

   - Cryptic Hunt is an intensive tech treasure hunt across the VIT campus where participants have to apply their cryptography and cybersecurity skills to solve riddles and questions leading them to notable landmarks around the campus.
   
   - CodePlusPlus is ACMVIT’s annual competitive coding event that tests the participant’s logical thinking skills and mathematical prowess.`;

  const boardList = `
    - Chair                     <chair>
    - Vice Chair                <vc>  
    - Secretary                 <sec>
    - Co-Secretary              <cosec>
    - Technical Head            <tech-head>
    - Design Head               <design-head>
    - Research Head             <research-head>
    - Competitive Coding Head   <cc-head>
    - Project Head              <projects-head>
    - Creative Head             <creative-head>
    - ACM-W Chair               <w-chair>
    - ACM-W Vice Chair          <w-vc>
    - ACM-W Secretary           <w-sec>
   `;

  const boardMap = {
    chair: "Harsh Avinash - Our Lord and Saviour",
    vc: "Aryan Khubchandani - The man everyone is scared of but is actually the sweetest.",
    sec: "Sumona Sud - She’s one of the hardest workers in the Chapter and never fails to inspire people to be like her.",
    cosec: "Chirayu Sharma - THE APP DEV",
    "tech-head": "Gagan Malvi - All tech, no talk. He made Styx btw",
    "design-head":
      "Jeet Kaushik - Body Building or Design, we don’t know what he likes more.",
    "research-head": "Thillai Chithambaram - Silent Killer",
    "cc-head": "Rehber Moin - He's your go to CC man",
    "projects-head": "Swarup kharul - Saves our backend. Always.",
    "creative-head": "Dhriti - The all-in-one",
    "w-chair":
      "Ananya Grover - Inspiring all around, makes ACM-W what it is today.",
    "w-vc": "Aishwarya Majunath - True Bangalore Girl",
    "w-sec": "Samridh Agarwal - The ladies' man",
  };

  var chosenDomain = "none";

  const timeout = 5000;

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    //add input to firebase
    storeInput(input);

    switch (input.toLowerCase().trim()) {
      case "board":
        setHistory([...history, { command: "board", output: boardList }]);
        break;

      case "chair":
        setHistory([
          ...history,
          { command: "chair", output: boardMap["chair"] },
        ]);
        break;

      case "vc":
        setHistory([...history, { command: "vc", output: boardMap["vc"] }]);
        break;

      case "sec":
        setHistory([...history, { command: "sec", output: boardMap["sec"] }]);
        break;

      case "cosec":
        setHistory([
          ...history,
          { command: "cosec", output: boardMap["cosec"] },
        ]);
        break;

      case "tech-head":
        setHistory([
          ...history,
          { command: "tech-head", output: boardMap["tech-head"] },
        ]);
        break;

      case "design-head":
        setHistory([
          ...history,
          { command: "design-head", output: boardMap["design-head"] },
        ]);

        break;

      case "research-head":
        setHistory([
          ...history,
          { command: "research-head", output: boardMap["research-head"] },
        ]);

        break;

      case "cc-head":
        setHistory([
          ...history,
          { command: "cc-head", output: boardMap["cc-head"] },
        ]);

        break;

      case "projects-head":
        setHistory([
          ...history,
          { command: "projects-head", output: boardMap["projects-head"] },
        ]);

        break;

      case "creative-head":
        setHistory([
          ...history,
          { command: "creative-head", output: boardMap["creative-head"] },
        ]);

        break;

      case "w-chair":
        setHistory([
          ...history,
          { command: "w-chair", output: boardMap["w-chair"] },
        ]);

        break;

      case "w-vc":
        setHistory([...history, { command: "w-vc", output: boardMap["w-vc"] }]);

        break;

      case "w-sec":
        setHistory([
          ...history,
          { command: "w-sec", output: boardMap["w-sec"] },
        ]);

        break;

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

      case "events":
        setHistory([
          ...history,
          {
            command: "events",
            output: events,
          },
        ]);
        break;

      case "whois":
        setHistory([
          ...history,
          {
            command: "whois",
            output: whoisText,
          },
        ]);
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
    <>
      <Sidebar />
      <div className="terminal">
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
        <div ref={historyEndRef}></div>
      </div>
    </>
  );
}

export default Terminal;
