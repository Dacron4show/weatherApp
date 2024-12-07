import { create } from "zustand";

interface myStore {
  yourState: string;
}
export const useyorestore = create<myStore>((set) => ({
  yourState: "VALUE",
}));
