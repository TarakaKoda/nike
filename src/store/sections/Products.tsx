import { StoreProductCard } from "../components";
import { Product } from "../data/interfaces";

interface Props {
  product: Product[];
}

const Products = ({ product }: Props) => {
  return (
    <section className="grid flex-1 gap-3 transition duration-150 ease-in-out max-lg:grid-cols-2 max-sm:w-full max-sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4">
      {product.map((product) => (
        <StoreProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};

export default Products;
