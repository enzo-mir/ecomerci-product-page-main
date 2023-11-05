import { create } from "zustand";
import images1 from "../assets/images/image-product-1.jpg";
import { imageType } from "src/types/imageStore.type";

export const images_store = create<imageType>((set) => ({
  imageUrl: images1,
  setImageUrl: (url) => set({ imageUrl: url }),
}));
