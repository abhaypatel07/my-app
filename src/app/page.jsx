"use client";
import Hero from "@/components/Section1/Hero";
import Navbar from "@/components/Navbar";
import Section1 from "@/components/Section1/Section1";
import Section2 from "@/components/Section2/Section2";
import { Poppins } from "next/font/google";
import Section3 from "@/components/Section3/Section3";

const poppins = Poppins({
  weight: "500",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main
      className={`${poppins.className} min-h-screen w-full text-black" id="mainBox`}
    >
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
    </main>
  );
}

// bg-[#10A3D1]
// bg-[#00D5BB]
