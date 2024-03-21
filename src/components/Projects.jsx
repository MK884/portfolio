import React from "react";
import ProjectCard from "./ProjectCard";
import Desk from "../assets/desk.svg";

const projects = [
  {
    id: 1,
    thumbnail: Desk,
    title: "Simple Calculator",
    demoUrl: "https://calculator-khalid.vercel.app/",
    codeUrl: "https://calculator-khalid.vercel.app/",
    desc: "calculator using html, css and javascript",
  },
  {
    id: 2,
    thumbnail: Desk,
    title: "Demo Projects",
    url: "#",
    desc: "small Description",
  },
  {
    id: 3,
    thumbnail: Desk,
    title: "Demo Projects",
    url: "#",
    desc: "small Description",
  },
];

const Projects = () => {
  return (
    <section className="lg:h-[60rem]" id="projects">
      <h2 className="font-bold text-white text-[4rem] text-center ">
        Projects
      </h2>
      <div className="flex flex-wrap gap-5 justify-center items-center my-[4rem] ">
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
