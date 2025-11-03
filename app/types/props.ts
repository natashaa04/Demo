import { blogT,OilProduct } from "./product";

export type BlogCardProps = {
  item: blogT;
};



export type ProductCardProps = {
  oil: OilProduct;
};

export type uploadProductModelProps = {
  onClose: () => void;
};
export type uploadBlogtModelProps = {
  onClose: () => void;
};
