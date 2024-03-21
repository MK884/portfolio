import React, { useEffect, useState } from "react";

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
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);}
    
  }, [activeSection]);

  return (
    <nav
      className="fixed lg:bottom-10 bottom-0 left-[50%] translate-x-[-50%] lg:w-[400px]  p-[.8rem] lg:rounded-[2rem] bg-white bg-opacity-[.08] backdrop-blur-lg w-full border border-white border-opacity-[.08] ;
    "
    >
      <ul className="flex font-bold  text-white list-none justify-around items-center hover:cursor-pointer">
        <li
          className={`py-2 rounded-[2rem] ${
            activeSection === "#home" ? "bg-[#763CAC] px-[2rem]" : ""
          }`}
        >
          <a href="#home" onClick={handleNav}>
            Home
          </a>
        </li>
        <li
          className={`py-2 rounded-[2rem] ${
            activeSection === "#skills" ? "bg-[#763CAC] px-[2rem]" : ""
          }`}
        >
          <a href="#skills" onClick={handleNav}>
            Skills
          </a>
        </li>
        <li
          className={`py-2 rounded-[2rem] ${
            activeSection === "#projects" ? "bg-[#763CAC] px-[2rem]" : ""
          }`}
        >
          <a href="#projects" onClick={handleNav}>
            Projects
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNav;
