import React from "react";
import Hero from "./Hero";
import { Josefin_Sans, Jersey_15 } from "next/font/google";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const josefin = Josefin_Sans({
  weight: "400",
  subsets: ["latin"],
});
const jersey = Jersey_15({
  weight: "400",
  subsets: ["latin"],
});

const Section1 = () => {
  useGSAP(() => {
    gsap.to("#upDown", {
      y: -20,
      duration: 3,
      ease: "power1",
      repeat: -1,
      yoyo: true,
      delay: 1,
    });
    gsap.to("#rotate", {
      rotate: 360,
      duration: 8,
      ease: "power1",
      repeat: -1,
      yoyo: true,
      delay: 1,
    });
    gsap.to("#leftRight", {
      x: -10,
      duration: 3,
      ease: "power1",
      repeat: -1,
      yoyo: true,
      delay: 1,
    });
    gsap.to("#scale", {
      scale: 0.9,
      rotate: 90,
      duration: 3,
      ease: "power1",
      repeat: -1,
      yoyo: true,
      delay: 1,
    });
  }, []);
  return (
    <div className="relative flex justify-center items-center w-full h-[100vh]">
      <div className="absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/3 w-[80%] hover:w-full hover:z-50 text-6xl opacity-50  tracking-tighter hover:tracking-wide hover:opacity-100 hover:mt-5  transition-all">
        <p className={`${josefin.className} text-black text-center`}>
          Empower Your Onboarding Experience
        </p>
        <p className={`${josefin.className} text-black text-center `}>
          with <span className="text-blue-700">AI</span> in Record Time
        </p>
      </div>
      <Hero />
      <Image
        src={"/images/pic1.png"}
        alt="element"
        height={70}
        width={70}
        className="absolute top-[20%] left-[20%]"
        id="upDown"
      />
      <Image
        src={"/images/pic2.png"}
        alt="element"
        height={80}
        width={80}
        className="absolute top-[80%] left-[30%]"
        id="leftRight"
      />
      <Image
        src={"/images/pic3.png"}
        alt="element"
        height={75}
        width={75}
        className="absolute top-[80%] left-[70%]"
        id="upDown"
      />
      <Image
        src={"/images/pic4.png"}
        alt="element"
        height={90}
        width={90}
        className="absolute top-[18%] left-[65%]"
      />
      <Image
        src={"/images/pic5.png"}
        alt="element"
        height={100}
        width={100}
        className="absolute top-[50%] left-[15%]"
        id="rotate"
      />
      <Image
        src={"/images/pic6.png"}
        alt="element"
        height={100}
        width={100}
        className="absolute top-[50%] left-[75%]"
        id="scale"
      />
      <div className="flex flex-col absolute bottom-5 left-5 w-[19%]">
        <p
          className={`${jersey.className} text-left tracking-tighter text-xl w-[70%] p-2`}
        >
          A single copilot for Any Enterprise Workflow, No AI Expertise
          required!
        </p>
        <button className="bg-blue-400 bg-opacity-20 shadow-lg backdrop-blur-lg border-2 border-opacity-40 border-[#064b60] rounded-lg text-gray-800 rounded-r-full py-3 flex justify-center items-center gap-2 text-sm hover:text-md hover:border-[#01232e] transition-all">
          CREATE YOUR FIRST ASSISTANT
          <FaArrowRight color="#1f2937" size={20} />
        </button>
      </div>
    </div>
  );
};

export default Section1;
