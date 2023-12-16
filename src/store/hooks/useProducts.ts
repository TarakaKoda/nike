import {
  shoes,
  jackets,
  hoodiesAndSweatshirts,
  topsAndTShirts,
  trousersAndTights,
  shorts,
  tracksuits,
} from "../data";
import { Product } from "../data/interfaces";

const useProducts = () => {
  const selectedProductCategory = (
    categoryName: string,
    setSelectedProduct: (product: Product[]) => void,
  ) => {
    if (categoryName === "Shoes") setSelectedProduct([...shoes]);
    if (categoryName === "Jackets") setSelectedProduct([...jackets]);
    if (categoryName === "Hoodies & Sweatshirts")
      setSelectedProduct([...hoodiesAndSweatshirts]);
    if (categoryName === "Trousers & Tights")
      setSelectedProduct([...trousersAndTights]);
    if (categoryName === "Shorts") setSelectedProduct([...shorts]);
    if (categoryName === "Tops & T-Shirts")
      setSelectedProduct([...topsAndTShirts]);
    if (categoryName === "Tracksuits") setSelectedProduct([...tracksuits]);
  };

  return {
    shoes,
    jackets,
    hoodiesAndSweatshirts,
    topsAndTShirts,
    trousersAndTights,
    shorts,
    tracksuits,
    selectedProductCategory,
  };
};

export default useProducts;
