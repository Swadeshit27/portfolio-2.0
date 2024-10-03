
import Skills from "@/components/Home/Skills";
import HomePage from "@/components/Home/HomePage";
import Projects from "@/components/Home/Projects";
import Experience from "@/components/Home/Experience";
import Review from "@/components/Home/Review";
import { getReviews } from "./libs/action";

export default async function Home() {

  const res: any = await getReviews(); 
  const reviews: ReviewProps[] = res?.documents;

  return (
    <>
      <HomePage />
      <Experience />
      <Skills />
      <Projects />
      <Review reviews={reviews} />
    </>
  );
} 
