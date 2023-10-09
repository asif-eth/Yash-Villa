import React from "react";
import { gsap } from "gsap"
import ScrollToPlugin from "gsap/ScrollToPlugin";
import "./Hero.css";

const Hero = () => {

  gsap.registerPlugin(ScrollToPlugin);

  const scrollToForm = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: "#formComponent",
      ease: "power2.inOut",
    })
  }

  return (
    <>
      <main className="bgContainer">

        <div className="header">
          <h1>Yash Villa</h1>
        </div>

        <div className="homeIcon">
          <button className="enquireBtn" onClick={scrollToForm}>Enquire Now</button>
        </div>

        <video
          className="bgVideo"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/yashVillaEnhanced.mp4" type="video/mp4" />
        </video>
      </main>
    </>
  );
};

export default Hero;
