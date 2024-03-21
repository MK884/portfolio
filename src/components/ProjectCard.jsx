import React from "react";

const ProjectCard = ({ title, thumbnail, demoUrl, codeUrl, desc }) => {
  return (
    <>
      <div className="hover:shadow-[ 5px 5px 5px 10px 1px #2f1339] hover:cursor-pointer hover:brightness-[108%] transition-all h-auto w-[200px] lg:w-[400px] rounded-lg flex flex-col overflow-hidden gap-5 p-[1rem] bg-[#222831]">
        <h2 className="text-white font-bold text-right flex">{title}</h2>
        <img
          src={thumbnail}
          className="rounded-lg lg:rounded-lg overflow-hidden"
        />
        <p className="text-white font-light">{desc}</p>
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
