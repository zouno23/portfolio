"use client";

import { cn } from "@/lib/utils";
import { usePath } from "../../store/position";
import { useEffect, useState } from "react";

export default function AboutMe() {
  const [display, setDisplay] = useState(false);
  const path = usePath((state) => state.path);
  useEffect(() => {
    let timeout;
    if (path === "About Me") {
      timeout = setTimeout(() => {
        setDisplay(true);
      }, 1000); // Shorter delay for quicker responsiveness
    } else {
      timeout = setTimeout(() => {
        setDisplay(false);
      }, 1000); // Delay hides the component after the animation
    }
    return () => clearTimeout(timeout);
  }, [path]);
  return (
    (path === "About Me" ?? display) && (
      <div className="flex h-full w-full px-20 pb-40 pt-20">
        <div
          className={cn(
            " overflow-hidden  h-0 w-0 space-y-4 text-wrap rounded-lg p-8 text-white opacity-0 shadow-sm shadow-slate-400 backdrop-blur-sm transition-all duration-1000 ease-in-out",
            display && "h-full w-1/2 opacity-100",
          )}
        >
          <h2 className="bg-gradient-to-br from-blue-500 to-slate-50/50 bg-clip-text text-5xl font-extrabold text-transparent">
            About Me
          </h2>
          <div className="text-3xl font-bold">
            Hey! <br />
            I'm Med{" "}
            <b className="bg-gradient-to-br from-blue-500 to-slate-50/50 bg-clip-text text-transparent">
              Aziz
            </b>{" "}
            Ben Hmidene
            <br />
            <p className="bg-gradient-to-br from-blue-500 to-slate-50/50 bg-clip-text text-base font-normal text-muted">
              A 21-year-old software engineer passionate about Bringing Ideas to
              life. With a background in Next.js, React.js, Vue.js, and
              Express.js.
            </p>
          </div>
          <p className="bg-gradient-to-br from-blue-500 to-slate-50/50 bg-clip-text text-base font-normal text-muted">
            I excel at transforming abstract concepts into practical and
            innovative solutions. My focus is on creating functional and
            impactful projects that solve real-world problems and enhance user
            experiences. I’m always excited to collaborate and explore new
            opportunities. Let’s connect and turn our visions into reality
            together!
          </p>
        </div>
      </div>
    )
  );
}
