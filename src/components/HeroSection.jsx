import React from "react";
import Desk from "../assets/desk.svg";

const HeroSection = () => {
  return (
    <>
      <section
        className="w-full flex flex-wrap lg:justify-around items-center h-[40rem] lg:h-[60rem] "
        id="home"
      >
        <div className="text-white text-[1.5rem] lg:text-[2.5rem] font-bold">
          <div>
            Hello! It's <span className="text-[#763CAC]">Merchant Khalid</span>
          </div>
          <div className="text-[1.5rem]">
            And I'am{" "}
            <span className="text-[#763CAC]">Full-Stack Developer</span>{" "}
          </div>
          <div className="text-[.8rem] text-wrap lg:w-[30rem] font-light mt-[3rem] lg:mt-[6rem]">
            Welcome to my portfolio! I am a final year Computer Engineering
            student who open to learn anything. As a self-driven learner, I
            continuously expand my expertise in web development, striving to
            create engaging and innovative digital experiences. I leverage my
            skills to build dynamic and responsive web applications.
          </div>
        </div>
        <img src={Desk} alt="desk" className="w-[60rem]" />
      </section>
    </>
  );
};

export default HeroSection;
