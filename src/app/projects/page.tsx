import { Metadata } from "next";
import Projects from "@/components/sections/Projects";

export const metadata: Metadata = {
  title: "Projects | Med Aziz Ben Hmidene",
  description: "Explore the portfolio projects of Med Aziz Ben Hmidene.",
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col items-center w-full">
      <Projects />
    </div>
  );
}
