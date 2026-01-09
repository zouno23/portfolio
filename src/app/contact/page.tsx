import { Metadata } from "next";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact | Med Aziz Ben Hmidene",
  description: "Get in touch with Med Aziz Ben Hmidene.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center w-full">
      <Contact />
    </div>
  );
}
