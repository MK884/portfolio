import React from "react";

const SocialIcon = ({ alt, logo, styles, link }) => {
  return (
    <>
      <a href={link}>
        <div className="w-[80px] h-[80px] rounded-md overflow-hidden bg-[#1e102b]">
          <img
            src={logo}
            alt={alt}
            className={`bg-cover hover:cursor-pointer transition-all ${styles}`}
          />
        </div>
      </a>
    </>
  );
};

export default SocialIcon;
