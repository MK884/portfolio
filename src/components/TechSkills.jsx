import React from "react";
import SkillBox from "./SkillBox";
import ReactLogo from "../assets/react.svg";
import CppLogo from "../assets/cpp.png";
import JsLogo from "../assets/js.svg";
import Html from "../assets/html5-original.svg";
import Css from "../assets/css3-original.svg";
import Git from "../assets/git-original.svg";
import Mysql from "../assets/mysql.svg";
import Sass from "../assets/sass.svg";
import Tailwind from "../assets/tailwindcss.svg";
import MaterialUi from "../assets/materialui.svg";
import Php from "../assets/php.svg";
import Codeigniter from "../assets/codeigniter4.png";

const Logos = [
  {
    id: 1,
    logo: CppLogo,
    title: "C++",
  },
  {
    id: 2,
    logo: Html,
    title: "HTML5",
  },
  {
    id: 3,
    logo: Css,
    title: "Css3",
  },
  {
    id: 4,
    logo: JsLogo,
    title: "JavaScript",
  },
  {
    id: 5,
    logo: ReactLogo,
    title: "ReactJs",
  },
  {
    id: 6,
    logo: Php,
    title: "Php",
  },
  {
    id: 7,
    logo: Codeigniter,
    title: "Codeigniter 4",
  },
  {
    id: 8,
    logo: Mysql,
    title: "MySql",
  },
  {
    id: 9,
    logo: Git,
    title: "Git",
  },
  {
    id: 10,
    logo: Tailwind,
    title: "Tailwind Css",
  },
  {
    id: 11,
    logo: MaterialUi,
    title: "MaterialUI",
  },
  {
    id: 12,
    logo: Sass,
    title: "Sass",
  },
];

const TechSkills = () => {
  return (
    <section className="lg:m-[8rem] lg:h-[60rem]" id="skills">
      <h2 className="font-bold text-white text-[4rem] text-center ">
        Technical Skills
      </h2>
      <div className="text-white text-center text-[25px]">
        I'm currently looking to join a{" "}
        <span className="text-[#763CAC] font-bold">Cross-functional</span> team
        <div className="text-[15px]">
          that values improving people's lives through accessible design
        </div>
      </div>
      <div className="flex flex-wrap gap-10 justify-center items-center my-[4rem] ">
        {Logos.map((logo) => (
          <SkillBox key={logo.id} logo={logo.logo} title={logo.title} />
        ))}
      </div>
    </section>
  );
};

export default TechSkills;
