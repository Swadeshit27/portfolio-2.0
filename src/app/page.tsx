
import Skills from "@/components/Home/Skills";
import SocialIcons from "@/components/Home/SocialIcons";
import HomePage from "@/components/Home/HomePage";
import Projects from "@/components/Home/Projects";
import Footer from "@/components/common/Footer";
import Experience from "@/components/Home/Experience";

export default function Home() {
  return (
    <>
      <HomePage />
      <Experience />
      <Skills />
      <Projects /> 
      <SocialIcons />
      <Footer />
    </>
  );
} 
