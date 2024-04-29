import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Hero from "./Hero";
import { Josefin_Sans } from "next/font/google";
import Text from "./Text";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const josefin = Josefin_Sans({
  weight: "700",
  subsets: ["latin"],
});

const Section2 = () => {
  const scrollRef = useRef();
  useGSAP(() => {
    gsap.from("#text", {
      opacity: 0,
      y: 200,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#text",
        start: "bottom bottom",
        end: "top 50%",
        scrub: true,
      },
    });
  }, []);
  return (
    <div className="w-full min-h-[100vh] p-20">
      <div className="bg-blue-500 w-full h-full bg-opacity-20 rounded-lg shadow-lg backdrop-blur-md border border-white border-opacity-30 p-10 flex flex-col gap-10 items-center" ref={scrollRef}>
        <h2
          className={`${josefin.className} font-extrabold text-center text-4xl`}
          id="text"
        >
          Tailored Solutions for Your Business Needs
        </h2>
        <div className="w-[90%] h-full flex justify-center items-center">
          <Text />
          <Hero />
        </div>
      </div>
    </div>
  );
};

export default Section2;
