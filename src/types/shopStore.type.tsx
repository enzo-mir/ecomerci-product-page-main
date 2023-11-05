type shopType = [
  {
    title: string;
    price: number;
    quantity: number;
    image: string;
  } | null
];

export interface shopStoreType {
  shop: shopType;
  setShop(val: shopType): void;
}
