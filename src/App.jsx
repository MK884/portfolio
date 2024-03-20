import { useState } from "react";
import { Connect, HeroSection, Projects, TechSkills } from "./components";

function App() {
  return (
    <>
      <div className="w-auto h-auto bg-[#16121d] m-0 ">
        <HeroSection />
        <TechSkills />
        <Projects />
        <Connect />
      </div>
    </>
  );
}

export default App;
