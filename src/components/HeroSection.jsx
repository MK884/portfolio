import React from "react";
// import Desk from "../assets/desk.svg";
import Desk from "../assets/about.png";
import BgVideo from "../assets/background.mp4";

const HeroSection = () => {
  return (
    <>
      <section
        className="w-full h-screen lg:h-[60rem]"
        id="home"
      >
        <video src={BgVideo} autoPlay loop muted className="w-full h-screen object-cover"></video>
        <div className=" absolute h-full w-screen top-0" >

            <p className="text-white m-8">Hello!</p>
        <div className="font-bold flex flex-wrap justify-center items-center h-screen flex-col">
            <h1 className="text-indigo-500 lg:text-[7rem] text-[3rem] text-center font-serif rotate-2">Merchant Khalid</h1>
            <h2 className="text-white lg:text-[5rem] lg:-mt-14 text-[3rem] text-center rotate-2">Full Stack Developer </h2>
          <a
            href="https://drive.google.com/file/d/1dVVtpfWb2hpKBcZnsb5ewpAJd1V5P84P/view?usp=sharing"
            target="_blank"
            >
            <button className="text-white shadow-md text-[1.5rem] m-8 bg-gradient-to-r hover:scale-110 transition-all from-indigo-500 p-2 rounded-lg">
              Resume
            </button>
          </a>
        </div>
              </div>
        {/* <img src={Desk} alt="desk" className="w-[40rem]" /> */}
      </section>
    </>
  );
};

export default HeroSection;
