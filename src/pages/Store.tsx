import { useState } from "react";
import { CategoriesHeading } from "../store/components";
import { useAllProducts } from "../store/hooks";
import { Product } from "../store/data/interfaces";
import { SideBar, Products } from "../store/sections";
import getProducts from "../store/ProductFilters";

const Store = () => {
  const allProducts = useAllProducts();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [hideFilters, setHideFilters] = useState(true);
  const [products, setProducts] = useState<Product[]>([...allProducts]);
  const productsGenderFilter = getProducts([...products]);
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const [noOfProducts, setNoOfProducts] = useState(products.length);

  const mensProducts = productsGenderFilter.menProducts();
  const womenProducts = productsGenderFilter.womenProducts();
  const kidsProducts = productsGenderFilter.kidsProducts();
  const unFilteredProducts = productsGenderFilter.getAllProducts();

  const handleProductsGenderFilter = (genderName: string) => {
    setCheckedItems((prevItems) => {
      const isChecked = prevItems.includes(genderName);
      const updatedGenders = isChecked
        ? prevItems.filter((item) => item !== genderName)
        : [...prevItems, genderName];
      return updatedGenders;
    });
  };

  return (
    <section className="selection:bg-slate-900 selection:text-white">
      <CategoriesHeading
        setSelectedCategory={setSelectedCategory}
        handleAllProducts={setProducts}
        hideFilters={hideFilters}
        selectedCategory={selectedCategory}
        numberOfProducts={noOfProducts}
        handleFiltersDisplay={(hideFilters) => {
          setHideFilters(hideFilters);
        }}
      />
      <div className="padding relative flex items-start justify-center max-xl:pt-0 max-md:flex-col">
        {hideFilters && (
          <aside className="sticky max-md:top-20  max-md:-ml-2 max-md:-mt-10 md:top-14 xl:top-7 ">
            <SideBar
            setCheckedItems={setCheckedItems}
              checkedItems={checkedItems}
              handleProductsGenderFilter={handleProductsGenderFilter}
              selectProduct={(selectedProduct: Product[]) => {
                // Check if selectedProduct is a valid category before updating state
                setProducts(selectedProduct);
              }}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </aside>
        )}
        <Products
          setProductsNumber={setNoOfProducts}
          product={
            checkedItems.includes("Women") && checkedItems.includes("Men")
              ? [...mensProducts, ...womenProducts]
              : checkedItems.includes("Women") && !checkedItems.includes("Men")
                ? womenProducts
                : checkedItems.includes("Men")
                  ? mensProducts
                  : checkedItems.includes("Kids")
                    ? kidsProducts
                    : unFilteredProducts
          }
        />
      </div>
    </section>
  );
};

export default Store;
