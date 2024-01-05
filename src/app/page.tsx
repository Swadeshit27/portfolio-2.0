"use client";
import Review from "@/components/Review";
import Skills from "@/components/Skills";
import SocialIcons from "@/components/SocialIcons";
import HomePage from "@/components/HomePage";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <>
      <HomePage />
      <Experience />
      <Skills />
      <Projects />
      <Review />
      {/*social icons  */}
      <SocialIcons />
      <Footer />
    </>
  );
} 
