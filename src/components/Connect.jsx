import React from "react";
import { Socialcon } from ".";

import GitHub from "../assets/github.svg";
import Linkedin from "../assets/linkedin.svg";
import Mail from "../assets/mail.png";

const platforms = [
  {
    id: 1,
    logo: GitHub,
    alt: "GitHub",
    link: "#",
    styles: "hover:border-2 hover:border-[#693B93] bg-white",
  },
  {
    id: 2,
    logo: Linkedin,
    alt: "LinkedIn",
    link: "#",
    styles: "hover:bg-blue-700 bg-white",
  },
  {
    id: 3,
    logo: Mail,
    alt: "Mail",
    link: "mailto:marchantkhalid7810@gmail.com",
    styles: "hover:bg-blue-700 bg-white",
  },
];

const Conect = () => {
  return (
    <>
      <div className="flex gap-2 justify-around w-full items-center flex-wrap lg:p-[3rem]">
        <h2 className="text-white font-bold text-[2rem]">
          Let's <span className="text-red-500">Connect!</span>
        </h2>
        <div className=" flex flex-wrap gap-5 ">
          {platforms.map((platform) => (
            <Socialcon
              key={platform.id}
              styles={platform.styles}
              logo={platform.logo}
              alt={platform.alt}
              link={platform.link}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Conect;
