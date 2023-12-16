import { Product } from "./data/interfaces";

class Products {
  product: Product[];
  constructor(product: Product[]) {
    this.product = product;
  }
  getAllProducts = () => this.product;

  menProducts = () => {
    return this.product.filter((product) => {
      return (
        product.subtitle.toLowerCase().includes("men's") &&
        !product.subtitle.toLowerCase().includes("women's")
      );
    });
  };

  womenProducts = () => {
    return this.product.filter((product) => {
      return product.subtitle.toLowerCase().includes("women's");
    });
  };

  kidsProducts = () => {
    return this.product.filter((product) => {
      return product.subtitle.toLowerCase().includes("kids");
    });
  };
  boysProducts = () => {
    return this.product.filter((product) => {
      return (
        product.subtitle.toLowerCase().includes("kids") &&
        !product.subtitle.toLocaleLowerCase().includes("girls")
      );
    });
  };
  girlsProducts = () => {
    return this.product.filter((product) => {
      return product.subtitle.toLowerCase().includes("girls");
    });
  };
}

const getProducts = (product: Product[]) => {
  return new Products(product);
};

export default getProducts;
