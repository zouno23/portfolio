import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Leadership from "@/components/sections/Leadership";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center w-full">
      <Hero />
      <Experience />
      <Projects />
      <Education />
      <Leadership />
      <Skills />
      <Contact />
    </div>
  );
}
