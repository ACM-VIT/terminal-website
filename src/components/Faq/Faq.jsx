import React from "react";

import Accordion from "./Accordion";

import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

import logo from "../../assets/acm-logo.svg";
import data from "./data";

import styles from "./Faq.module.css";

const Faq = () => {
  return (
    <div
      className={`h-screen w-screen ${styles.background} flex flex-col items-center space-y-5`}
    >
      <div className="mt-10">
        <img src={logo} alt="ACM VIT's Logo" className="scale-90" />
      </div>
      <div className="text-5xl">FAQs</div>
      <div>
        {data.map((item) => {
          return <Accordion key={item.id} {...item} />;
        })}
      </div>
      <div className="text-3xl cursor-pointer">Back</div>
      <div className="mb-2 flex space-x-8">
        <a href="https://www.linkedin.com/company/acmvit">
          <FaLinkedin className="scale-150" />
        </a>
        <a href="https://twitter.com/ACM_VIT">
          <FaTwitter className="scale-150" />
        </a>
        <a href="https://www.instagram.com/acmvit/">
          <FaInstagram className="scale-150" />
        </a>
        <a href="https://github.com/ACM-VIT">
          <FaGithub className="scale-150" />
        </a>
      </div>
    </div>
  );
};

export default Faq;
