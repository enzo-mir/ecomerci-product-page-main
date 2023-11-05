import { shopStoreType } from "src/types/shopStore.type";
import { create } from "zustand";

export const shop_store = create<shopStoreType>((set) => ({
  shop: [null],
  setShop: (table) => set({ shop: table }),
}));
