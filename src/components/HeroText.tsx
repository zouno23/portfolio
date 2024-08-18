"use client";
import { cn } from "@/lib/utils";
import { TypewriterEffectSmooth } from "./global/TypeWriterText";
import { useEffect, useState } from "react";
import { usePath } from "../store/position";

export default function HeroText() {
  const words = [
    {
      text: "Welcome ",
      className: "font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-slate-50/50",
    },
    {
      text: "To",
      className: "font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-slate-50/50",
    },
    {
      text: "Aziz's",
      className: "font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white to-blue-500/80",
    },
    {
      text: "World",
      className: "font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-slate-50/50",
    },
  ];
  const words2 = [
    {
      text: "How ",
      className: "font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-slate-50/50",
    },
    {
      text: "Can I",
      className: "font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-slate-50/50",
    },
    {
      text: "Help",
      className: "font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-slate-50/50",
    },
    {
      text: "You?",
      className: "font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-slate-50/50",
    },
  ];
  const [showText, setShowText] = useState(false);
  const [showBox, setShowBox] = useState(false);
  const path = usePath(state=>state.path)
  useEffect(() => {
    const timeoutBox = setTimeout(() => {
      setShowBox(true);
    }, 3300); // 500ms delay
    const timeout = setTimeout(() => {
      setShowText(true);
    }, 3500); // 500ms delay
    // 500ms delay

    return () => {
      clearTimeout(timeoutBox);
      clearTimeout(timeout);
    }; // Clean up the timeout
  }, []);
  return (
    <div className="absolute z-20 h-full w-7/12 px-20 py-40 text-center pointer-events-none">
      {showBox && (
        <div
          className={cn(
            "show-box flex h-full w-full scale-75 flex-col items-center justify-center gap-2 rounded-xl shadow-slate-400 shadow-sm px-8 py-8 backdrop-blur-[1px] transition-transform duration-500 ease-out",
            showText && "scale-100",path.length>0 && "scale-0 duration-1000"
          )}
        >
          {showText && (
            <>
              <TypewriterEffectSmooth
                words={words}
                className="m-0 p-0 text-center"
                cursorClassName="hidden"
              />
              <TypewriterEffectSmooth
                words={words2}
                className="m-0 p-0 text-center"
              />
              <div className="flex"></div>
            </>
          )}


        </div>
      )}
    </div>
  );
}
