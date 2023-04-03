import React from "react";
import bg from './background.svg'
import tech from './tech.svg'
import ACM from './ACM.svg'
import {
    CiInstagram,
    CiTwitter,
    CiFacebook,
    CiYoutube,
    CiLinkedin,
} from "react-icons/ci";
  
import { IconContext } from "react-icons";
import { hover } from "@testing-library/user-event/dist/hover";

function Landing()
{
    const backgroundImageStyle = {
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    };

    return (
        <div className="flex flex-col min-h-screen" style={backgroundImageStyle}>
            <div className="flex-none md:h-36 pt-8 flex items-center justify-center">
                <img src={ACM} className='h-full' alt="ACM Logo" />
            </div>
            <div className="flex-grow md:h-40 lg:h-60">
                <div className='pb-4 md:pb-4 lg:pb-8 pt-8 flex items-center text-center justify-center text-4xl md:text-5xl lg:text-6xl'>
                    ACM Enrollments
                </div>
                <div className='pb-2 px-2 md:pb-8 lg:pb-12 flex items-center justify-center text-center text-xl md:text-2xl lg:text-3xl'>
                    Empowering the future of computing through exceptional committee selections
                </div>   
            </div>
            <div className="flex-none h-20 flex items-center justify-center">
                <button className="bg-[#41E22E] hover:bg-green-400 text-black py-2 px-4 ">
                    <div className='text-lg md:text-3xl lg:text-4xl px-3'>Register Now</div>
                </button>
            </div>
            <div className="flex-grow p-8 md:pt-12 lg:pt-16 pb-12 md:pb-12 lg:pb-20 flex items-center justify-center">
                <img src={tech} className='h-full' alt="Tech Image" />
            </div>
            <div className="flex-grow pb-8 h-15">
                <div className='flex items-center justify-center text-2xl md:text-4xl lg:text-5xl'><a href=''>FAQs</a></div>
            </div>
            <div className="flex items-center justify-center pb-8 h-10">
                <div className="flex landing ">
                <IconContext.Provider value={{ color: "#41E22E", size: "2rem" }}>
                    <a href="https://www.facebook.com/acmvitvellore" className="icon">
                        <CiFacebook />
                    </a>
                    <a href="https://instagram.com/acmvit" className="icon">
                        <CiInstagram />
                    </a>
                    <a href="https://www.youtube.com/channel/UCaV36jEoK5SI59ly0Mxa_ZA" className="icon">
                        <CiYoutube />
                    </a>
                    <a href="https://twitter.com/ACM_VIT" className="icon">
                        <CiTwitter />
                    </a>
                    <a href="https://www.linkedin.com/company/acmvit/" className="icon">
                        <CiLinkedin />
                    </a>
                </IconContext.Provider>
                </div>
            </div>
        </div>
    );
}

export default Landing;