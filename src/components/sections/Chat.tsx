"use client";

import { useEffect, useState } from "react";
import { usePath } from "../../store/position";
import { cn } from "@/lib/utils";

export default function Chat() {
    const [display, setDisplay] = useState(false);
    const path = usePath((state) => state.path);

    useEffect(() => {
        let timeout;
        if (path === "Chat") {
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

    return (path === "Chat"??display)&&(
        <div className="w-full h-full flex pb-40 pt-20 px-72">
            <div
                className={cn(
                    "w-0 h-0 opacity-0 shadow-sm shadow-slate-400  transition-all duration-1000 ease-in-out backdrop-blur-sm rounded-lg",
                    display && "w-full h-full opacity-100 "
                )}
            >
                {/* Chat content goes here */}
            </div>
        </div>
    );
}
