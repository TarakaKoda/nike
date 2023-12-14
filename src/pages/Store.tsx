import { useState } from "react";
import CategoriesHeading from "../components/CategoriesHeading";
import { allProducts } from "../data";
import { Product } from "../data/interfaces";
import Products from "../sections/store/Products";
import SideBar from "../sections/store/SideBar";

const Store = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [hideFilters, setHideFilters] = useState(true);
  const [products, setProducts] = useState<Product[]>([...allProducts]);

  return (
    <section>
      <CategoriesHeading
        setSelectedCategory={setSelectedCategory}
        handleAllProducts={setProducts}
        hideFilters={hideFilters}
        selectedCategory={selectedCategory}
        numberOfProducts={products.length}
        handleFiltersDisplay={(hideFilters) => {
          setHideFilters(hideFilters);
        }}
      />
      <div className="padding relative flex justify-center max-xl:flex-col">
        {hideFilters && (
          <aside className="sticky -top-0 max-xl:top-20 max-xl:-ml-2 max-xl:-mt-10 ">
            <SideBar
              selectProduct={(selectedProduct: Product[]) => {
                // Check if selectedProduct is a valid category before updating state
                setProducts(selectedProduct);
              }}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </aside>
        )}
        <Products product={products} />
      </div>
    </section>
  );
};

export default Store;
