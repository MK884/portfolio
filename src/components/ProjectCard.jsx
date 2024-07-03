import React from "react";
import CarouselContainer from "../../carouselConatiner/CarouselContainer";

const ProjectCard = ({ title, thumbnail, demoUrl, codeUrl, desc }) => {
  return (
    < >
      <div className="hover:shadow-[5px 5px 5px 10px 1px #2f1339] hover:cursor-pointer border border-[#353131b7] hover:border-white hover:border transition-all w-[320px]  rounded-lg flex flex-col overflow-hidden gap-5 p-[1rem] bg-[#0b0e13]">
        <h2 className="text-white font-bold line-clamp-1 text-ellipsis">
          {title}
        </h2>
        <img
          src={thumbnail}
          className="rounded-lg lg:rounded-[16px] h-[200px] overflow-hidden bg-cover"
        />
        <p className="text-white font-light text-ellipsis line-clamp-3 min-h-[4.6rem]">
          {desc}
        </p>
        <div className="flex flex-wrap lg:flex-row flex-col gap-2">
          <a href={demoUrl} className="lg:w-1/2" target="_blank">
            <button className="w-full text-white font-medium bg-[#693B93] rounded-md p-2 active:scale-90 transition-all">
              Demo
            </button>
          </a>
          <a href={codeUrl} className=" lg:w-[47%]" target="_blank">
            <button className="w-full text-white font-medium border-[1px] border-[#693B93] rounded-md p-2 active:scale-90 transition-all">
              Code
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;