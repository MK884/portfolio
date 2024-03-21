import React from "react";
import ProjectCard from "./ProjectCard";
import Calculator from "../assets/calculator.png";
import GuessW from "../assets/guess-words.png";
import ColorP from "../assets/color-plate.png";
import QR from "../assets/qr.png";
import Password from "../assets/password.png";
import Translator from "../assets/translator.png";
import Typing from "../assets/typing.png";

const projects = [
  {
    id: 1,
    thumbnail: Calculator,
    title: "Simple Calculator",
    demoUrl: "https://calculator-khalid.vercel.app/",
    codeUrl: "https://github.com/MK884/JsTutorials/tree/main/Calculator",
    desc: "calculator using html, css and javascript jhadhba dahgd agddysa dahgda dhgdhasgd  dgahd agd hdga  dahdah das gh dagdas dasg dahghada haghada gdha  jdgygy",
  },
  {
    id: 2,
    thumbnail: GuessW,
    title: "Guess The Words",
    demoUrl: "https://guess-words-game.vercel.app/",
    codeUrl: "https://github.com/MK884/JsTutorials/tree/main/GuessWords",
    desc: "small Description",
  },
  {
    id: 3,
    thumbnail: ColorP,
    title: "Random Color Plate Generator",
    demoUrl: "https://color-plate-khalid.vercel.app/",
    codeUrl:
      "https://github.com/MK884/JsTutorials/tree/main/Color%20Palette%20Generator",
    desc: "small Description",
  },
  {
    id: 4,
    thumbnail: QR,
    title: "QR Code Generator",
    demoUrl: "https://qr-code-generator-khalid.vercel.app/",
    codeUrl: "https://github.com/MK884/Qr-code-generator",
    desc: "small Description",
  },
  {
    id: 5,
    thumbnail: Password,
    title: "Passowrd Generator",
    demoUrl: "https://qr-code-generator-khalid.vercel.app/",
    codeUrl: "https://github.com/MK884/Qr-code-generator",
    desc: "small Description",
  },
  {
    id: 6,
    thumbnail: Translator,
    title: "Translator WebApp",
    demoUrl: "https://translator-app-khalid.vercel.app/",
    codeUrl: "https://github.com/MK884/translator",
    desc: "small Description",
  },
  {
    id: 6,
    thumbnail: Typing,
    title: "Typing WebApp",
    demoUrl: "https://typing-app-khalid.vercel.app/",
    codeUrl: "https://github.com/MK884/translator",
    desc: "small Description",
  },
];

const Projects = () => {
  return (
    <section className="min-h-[60rem]" id="projects">
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
