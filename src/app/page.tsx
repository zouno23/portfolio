import { Suspense } from "react";
import FirstScene from "./FirstScene";
import HeroText from "../components/HeroText";
import ChatField from "../components/ChatField";
import Sections from "../components/sections/index";

export default function HomePage() {

  return (
   <div className="w-screen h-screen bg-black relative overflow-hidden">
    <Sections/>
    <ChatField/>
    <HeroText/>
    <Suspense fallback={<span>loading....</span>}>
    <FirstScene/>
    </Suspense>
    </div>
  );
}

