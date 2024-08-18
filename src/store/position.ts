"use client";
import  create  from "zustand";

export interface Path {
  path: string;
  setPath: (path: string) => void;
}
export const usePath = create<Path>((set) => ({
  path: "",
  setPath: (path: string) => set({ path }),
}));
