import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Josefin_Sans } from "next/font/google";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const cardsData = [
  {
    title: "Tailored Training Programs",
    imageSrc: "/images/pic1.png",
    alt: "Customized Training Programs",
    description:
      "Our training programs are tailored to match your team's skill level and business requirements. From basic introductions to advanced functionalities, we offer engaging and interactive sessions that ensure a thorough understanding of Machador's capabilities.",
    buttonLabel: "Learn More",
  },
  {
    title: "Continuous Learning Opportunities",
    imageSrc: "/images/pic1.png",
    alt: "Continuous Learning Opportunities",
    description:
      "Stay up to date with regular updates and new feature guides. Join the Machador community to share insights, tips, and best practices with other users. Our commitment to ongoing education ensures that you're always equipped with the latest knowledge.",
    buttonLabel: "Join Community",
  },
  {
    title: "Around-the-Clock Support",
    imageSrc: "/images/pic1.png",
    alt: "24/7 Support",
    description:
      "Our dedicated support team is available 24/7 to assist you with any queries or issues you may encounter. Reach out to us via email, chat, or phone – we're here to help in whichever way suits you best.",
    buttonLabel: "Get Support Now",
  },
  {
    title: "Your Success, Our Priority",
    imageSrc: "/images/pic1.png",
    alt: "Your Success Is Our Priority",
    description:
      "Our commitment to your success drives our training and support initiatives. With Machador, you're never alone on your journey to transforming your business with AI. We believe in forging lasting partnerships with our clients and ensuring that you have the assistance you need, when you need it.",
    buttonLabel: "Start Succeeding",
  },
];

const josefin = Josefin_Sans({
  weight: "700",
  subsets: ["latin"],
});

const Section3 = () => {
  const scrollRef = useRef();
  useGSAP(
    () => {
      gsap.from("#text2", {
        opacity: 0,
        y: 200,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#text2",
          start: "bottom bottom",
          end: "top 70%",
          scrub: true,
        },
      });
      // gsap.from("#cards", {
      //   y: 200,
      //   ease: "power1",
      //   scrollTrigger: {
      //     trigger: "#cards",
      //     start: "bottom bottom",
      //     end: "top 100%",
      //     // scrub: true,
      //   },
      // });
    },
    { scope: scrollRef },
    []
  );
  return (
    <div className="w-full min-h-[100vh] p-20" ref={scrollRef}>
      <div>
        <h2
          className={`${josefin.className} font-extrabold text-center text-4xl`}
          id="text2"
        >
          Continuous Support for Your Success
        </h2>
        <div className="h-full flex justify-center gap-3 mt-5" id="cards">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="max-w-sm h-full overflow-hidden m-4 bg-blue-500 w-full bg-opacity-20 rounded-lg shadow-lg backdrop-blur-md border border-white border-opacity-30"
            >
              <Image
                className="w-full h-56 object-cover"
                src={card.imageSrc}
                alt={card.alt}
                width={500}
                height={500}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{card.title}</div>
                <p
                  className="text-gray-700 text-base h-36"
                  style={{
                    overflowY: "auto",
                    scrollbarWidth: "thin",
                    scrollbarColor: "#1d4ed8 #3b82f6",
                    WebkitOverflowScrolling: "touch",
                    scrollBehavior: "smooth",
                    scrollbarGutter: "stable",
                  }}
                >
                  {card.description}
                </p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                  {card.buttonLabel}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section3;
