import React from "react";
import SkillBox from "./SkillBox";
import { skills } from "../data";

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
        {skills.map((skill) => (
          <SkillBox key={skill.id} logo={skill.logo} title={skill.title} />
        ))}
      </div>
    </section>
  );
};

export default TechSkills;
