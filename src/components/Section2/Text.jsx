import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Josefin_Sans } from "next/font/google"; // Importing Kanit font
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const text =
  "Machador offers personalized solutions tailored to your business needs. Our team works closely with you to understand your requirements and develop customized strategies that maximize efficiency and effectiveness. Unlock the full potential of your business with Machador's customized solutions. Our team specializes in understanding your unique challenges and crafting tailored strategies to address them effectively. Whether it's streamlining workflows, enhancing productivity, or securing knowledge assets, our personalized approach ensures that you get the most out of our AI-driven solutions. Experience the difference of Machador's customized solutions today.";

const josefin = Josefin_Sans({
  weight: "400",
  subsets: ["latin"],
});

function Text() {
  const [lettersRef, setLettersRef] = useArrayRef();
  const triggerRef = useRef(null);

  function useArrayRef() {
    const lettersRef = useRef([]);
    lettersRef.current = [];
    return [lettersRef, (ref) => ref && lettersRef.current.push(ref)];
  }

  useGSAP(() => {
    const anim = gsap.to(lettersRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: true,
        start: "top center",
        end: "bottom 85%",
      },
      color: "#000000",
      duration: 5,
      stagger: 1,
    });
    return () => {
      anim.kill();
    };
  }, [lettersRef]);

  return (
    <>
      <div className="relative flex justify-center items-center w-[40%] h-full bg-gradient-radial">
        <div className="reveal">
          <div ref={triggerRef}>
            {text.split("").map((letter, index) => (
              <span
                className={`${josefin.className} text-gray-500 font-thin text-3xl reveal-text`}
                key={index}
                ref={setLettersRef}
              >
                {letter}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Text;
