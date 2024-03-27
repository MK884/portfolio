import React, { useEffect, useState } from "react";
import { CiHome } from "react-icons/ci";
import { FaRegCircle } from "react-icons/fa6";
import { FaRegSquare } from "react-icons/fa";

const BottomNav = () => {
  const [activeSection, setActiveSection] = useState("#home");

  const handleNav = (e) => {
    setActiveSection(e.target.getAttribute("href"));
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section"); // Assuming sections have 'id' attribute matching href values
      let currentSectionId = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          currentSectionId = `#${section.id}`;
        }
      });

      if (currentSectionId && currentSectionId !== activeSection) {
        setActiveSection(currentSectionId);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  return (
    <nav
      className="fixed lg:bottom-10 bottom-0 px-1 py-2 left-1/2 translate-x-[-50%] lg:w-[400px] lg:rounded-[2rem] bg-[#232329] rounded-md w-full m-1 border border-[#2e2e2e]
    "
    >
      <ul className="flex font-bold  text-white list-none justify-around items-center hover:cursor-pointer">
        <li
          className={`p-[8px] rounded-md ${
            activeSection === "#home" ? "bg-[#3f3c3c69]" : ""
          }`}
        >
          <a href="#home" onClick={handleNav}>
            <CiHome size={18} />
          </a>
        </li>
        <li
          className={`p-[8px] rounded-md ${
            activeSection === "#skills" ? "bg-[#3f3c3c69]" : ""
          }`}
        >
          <a href="#skills" onClick={handleNav}>
            <FaRegCircle size={14} />
          </a>
        </li>
        <li
          className={`p-[8px] rounded-md ${
            activeSection === "#projects" ? "bg-[#3f3c3c69]" : ""
          }`}
        >
          <a href="#projects" onClick={handleNav}>
            <FaRegSquare size={14} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNav;
