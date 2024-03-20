import React from "react";

const SkillBox = ({ logo, title }) => {
  return (
    <>
      <div
        className="w-[100px] h-[100px] lg:w-[160px] overflow-hidden lg:h-[160px] rounded-md border-[1px] border-[#3b2055] flex justify-center items-center p-4 bg-[#1e102b] hover:scale-90 transition-all hover:cursor-pointer"
        title={title}
      >
        <img src={logo} alt="html" className="w-[16rem]" />
      </div>
    </>
  );
};

export default SkillBox;
