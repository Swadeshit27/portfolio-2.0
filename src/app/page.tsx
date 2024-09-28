
import Skills from "@/components/Home/Skills"; 
import HomePage from "@/components/Home/HomePage";
import Projects from "@/components/Home/Projects"; 
import Experience from "@/components/Home/Experience";
// import Review from "@/components/Home/Review";

export default function Home() {
  return (
    <>
      <HomePage />
      <Experience />
      <Skills />
      <Projects />  
      {/* <Review/> */}
    </>
  );
} 
