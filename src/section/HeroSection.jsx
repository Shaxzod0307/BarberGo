import React from "react";
import heroBg from "../assets/hero-bg.png";
import Button from "../components/ui/Button";
const HeroSection = () => {
  return (
    <section
      style={{ background: `url(${heroBg}) no-repeat center/cover` }}
      className=" h-screen absolute w-screen top-0 pt-20"
    >
      <div className="w-5xl mx-auto">
        <h1 className="text-8xl mt-[144px] text-yellow-main">
          HAIRCUT <br /> &SHAVE
        </h1>
        <h2 className="text-5xl mt-10 text-white">
          LOOK YOUR <br /> BEST
        </h2>
        <Button className="bg-yellow-main px-9 py-3 mt-10">BOOK NOW</Button>
      </div>
    </section>
  );
};

export default HeroSection;
