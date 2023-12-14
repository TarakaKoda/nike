import StoreProductCard from "../../components/StoreProductCard";
import { Product } from "../../data/interfaces";

interface Props {
  product: Product[];
}

const Products = ({ product }: Props) => {
  return (
    <section className="grid flex-1 gap-4 transition duration-150 ease-in-out max-sm:w-full md:grid-cols-2 xl:grid-cols-3">
      {product.map((product) => (
        <StoreProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};

export default Products;
