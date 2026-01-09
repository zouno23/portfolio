import { Metadata } from "next";
import Experience from "@/components/sections/Experience";

export const metadata: Metadata = {
  title: "Experience | Med Aziz Ben Hmidene",
  description: "Professional experience and work history of Med Aziz Ben Hmidene.",
};

export default function ExperiencePage() {
  return (
    <div className="flex flex-col items-center w-full">
      <Experience />
    </div>
  );
}
