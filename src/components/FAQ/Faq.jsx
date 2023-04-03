import React from "react";

import Accordion from "./Accordion";

import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

import logo from "../../assets/ACM.svg";
import data from "./data";
import { Link } from 'react-router-dom';

import styles from "./Faq.module.css";

const Faq = () => {
  return (
    <div
      className={`h-screen w-screen ${styles.background} flex flex-col items-center space-y-5`}
    >
      <div className="flex-none md:h-36 pt-8 flex items-center justify-center">
                <img src={logo} className='h-full' alt="ACM Logo" />
            </div>
      <div className="text-5xl pt-8">FAQs</div>
      <div>
        {data.map((item) => {
          return <Accordion key={item.id} {...item} />;
        })}
      </div>
      <div className="text-3xl cursor-pointer"><Link to="/landing">Back</Link></div>
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