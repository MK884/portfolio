import React from "react";
import ProjectCard from "./ProjectCard";
import Desk from "../assets/desk.svg";


const projects = [
    {
        id:1,
        thumbnail: Desk,
        title: "Demo Projects",
        url:"#",
        desc:"small Description"
    },
    {
        id:2,
        thumbnail: Desk,
        title: "Demo Projects",
        url:"#",
        desc:"small Description"

    },
    {
        id:3,
        thumbnail: Desk,
        title: "Demo Projects",
        url:"#",
        desc:"small Description"

    },
]

const Projects = () => {
  return (
    <div className="lg:h-[60rem]">
      <h2 className="font-bold text-white text-[4rem] text-center ">
        Projects
      </h2>
      <div className="flex flex-wrap gap-5 justify-center items-center my-[4rem] ">
        {
            projects.map(project=>(
                <ProjectCard key={project.id} desc={project.desc} thumbnail={project.thumbnail} title={project.title} url={project.url}/>
            ))
        }
      </div>
      hello
    </div>
  );
};

export default Projects;
