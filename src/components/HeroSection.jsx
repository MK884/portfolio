import React from "react";
// import Desk from "../assets/desk.svg";
import Desk from "../assets/about.png";

const HeroSection = () => {
  return (
    <>
      <section
        className="w-full flex flex-wrap lg:justify-around items-center h-auto lg:h-[60rem] flex-col-reverse lg:flex-row "
        id="home"
      >
        <div className="text-white text-[3rem] lg:text-[3.5rem] font-bold">
          <div>
            Hello! It's <span className="text-[#763CAC]">Merchant Khalid</span>
          </div>
          <div className="text-[2.3rem]">
            And I'am{" "}
            <span className="text-[#763CAC]">Full-Stack Developer</span>{" "}
          </div>
          <div className="text-[1.2rem] text-wrap lg:w-[30rem] font-light mt-[3rem] lg:mt-[6rem] text-center lg:text-left text-[#dadada]">
            Welcome to my portfolio! I am a final year Computer Engineering
            student who open to learn anything. As a self-driven learner, I
            continuously expand my expertise in web development, striving to
            create engaging and innovative digital experiences. I leverage my
            skills to build dynamic and responsive web applications.
          </div>
          <a
            href="https://drive.google.com/file/d/1dVVtpfWb2hpKBcZnsb5ewpAJd1V5P84P/view?usp=sharing"
            target="_blank"
          >
            <button className="text-white text-[1.5rem] bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-lg">
              Check Resume
            </button>
          </a>
        </div>
        <img src={Desk} alt="desk" className="w-[40rem]" />
      </section>
    </>
  );
};

export default HeroSection;
