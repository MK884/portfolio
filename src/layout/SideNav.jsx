import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const SideNav = () => {
  return (
    <nav className="fixed lg:right-[4.5rem] lg:top-1/2 translate-y-[-50%] h-auto w-screen lg:w-[40px] lg:rounded-[16px] bg-white bg-opacity-[.08] border border-white border-opacity-[.08]">
      <ul className="flex items-center lg:flex-col  flex-row  my-4 gap-5 justify-center">
        <a href={"https://www.linkedin.com/in/merchant-khalid/"} target="blank">
          <FaLinkedin className="text-white h-[30px] w-[30px]" />
        </a>
        <a href="https://github.com/MK884" target="_blank">
          <FaGithub className="text-white h-[30px] w-[30px]" />
        </a>
      </ul>
    </nav>
  );
};

export default SideNav;
