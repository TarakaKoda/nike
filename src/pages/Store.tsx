import { useState } from "react";
import { CategoriesHeading } from "../store/components";
import { allProducts } from "../store/data";
import { Product } from "../store/data/interfaces";
import { SideBar, Products } from "../store/sections";

const Store = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [hideFilters, setHideFilters] = useState(true);
  const [products, setProducts] = useState<Product[]>([...allProducts]);

  return (
    <section className="selection:bg-slate-900 selection:text-white">
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
      <div className="padding relative flex items-start justify-center max-xl:pt-0 max-md:flex-col">
        {hideFilters && (
          <aside className="sticky max-md:top-20  max-md:-ml-2 max-md:-mt-10 md:top-14 xl:top-7 ">
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
