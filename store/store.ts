import { Store } from "@/types/store";
import { create } from "zustand";

const useBearStore = create<Store>()((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));

export default useBearStore;
