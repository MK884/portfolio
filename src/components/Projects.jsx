import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data";

const Projects = () => {
  return (
    <section className="" id="projects">
      <h2 className="font-bold text-white text-[4rem] text-center ">
        Projects
      </h2>
      <div className="flex flex-wrap gap-2 justify-center items-center my-[4rem] ">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            desc={project.desc}
            thumbnail={project.thumbnail}
            title={project.title}
            demoUrl={project.demoUrl}
            codeUrl={project.codeUrl}
          />
        ))}
      </div>
      hello
    </section>
  );
};

export default Projects;
