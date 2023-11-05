import { showLightboxType } from "src/types/showLightbox.type";
import { create } from "zustand";

export const lightbox_store = create<showLightboxType>((set) => ({
  showLightBox: false,
  setShowLightBox: (val) => set({ showLightBox: val }),
}));
