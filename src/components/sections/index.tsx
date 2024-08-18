"use client";

import AboutMe from "./About-Me";
import Chat from "./Chat";
import ProExp from "./Professional-Exp";

export default function Sections() {
  return (
    <div className="absolute left-0 top-0 z-20 h-screen w-screen">
      <AboutMe/>
      <Chat />
      <ProExp/>
    </div>
  );
}
