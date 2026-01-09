import { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Education from "@/components/sections/Education";
import Leadership from "@/components/sections/Leadership";
import Skills from "@/components/sections/Skills";

export const metadata: Metadata = {
  title: "About | Med Aziz Ben Hmidene",
  description: "Learn more about Med Aziz Ben Hmidene, a Full Stack Software Engineer.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center w-full">
      <Hero />
      <Education />
      <Leadership />
      <Skills />
    </div>
  );
}
