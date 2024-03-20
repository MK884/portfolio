import React from "react";

const ProjectCard = ({ title, thumbnail, url, desc }) => {
  return (
    <>
      <div className="hover:shadow-[ 5px 5px 5px 10px 1px #2f1339] hover:cursor-pointer hover:brightness-[108%] transition-all h-auto w-[200px] lg:w-[400px] rounded-md border-[1px] flex flex-col overflow-hidden border-[#3b2055] p-[1rem] ">
        <h2 className="text-white font-bold mb-[1rem] text-right flex">
          {title}
        </h2>
        <p className="text-white font-light">{desc}</p>
        <img
          src={thumbnail}
          className="lg:h-[12rem] border-none rounded-md mb-4"
        />
        <div className="flex flex-wrap lg:flex-row flex-col gap-2">
          <a href={url} className="lg:w-1/2">
            <button className="w-full text-white font-medium bg-[#693B93] rounded-md p-2 active:scale-90 transition-all">
              Demo
            </button>
          </a>
          <a href={url} className=" lg:w-[47%]">
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
