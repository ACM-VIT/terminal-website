import React from "react";
import "./sidebar.css";
import {
  CiInstagram,
  CiTwitter,
  CiFacebook,
  CiYoutube,
  CiLinkedin,
} from "react-icons/ci";

import { SiAcm } from "react-icons/si";

import { IconContext } from "react-icons";

function Sidebar() {
  return (
    <div className="sidebar">
      <acm />
      <IconContext.Provider value={{ color: "white", size: "1.4rem" }}>
        <a id="fb" href="https://www.facebook.com/acmvitvellore">
          <CiFacebook></CiFacebook>
        </a>
        <a href="https://instagram.com/acmvit">
          <CiInstagram></CiInstagram>
        </a>
        <a href="https://www.youtube.com/channel/UCaV36jEoK5SI59ly0Mxa_ZA">
          <CiYoutube></CiYoutube>
        </a>
        <a href="https://twitter.com/ACM_VIT">
          <CiTwitter></CiTwitter>
        </a>
        <a href="https://www.linkedin.com/company/acmvit/">
          <CiLinkedin></CiLinkedin>
        </a>
        <a id="acm-logo" href="https://acmvit.in">
          <SiAcm></SiAcm>
        </a>
      </IconContext.Provider>
    </div>
  );
}

export default Sidebar;
