import { CategoriesList, ProductFilterList } from "../components";
import { categories, kids } from "../constants";
import { Gender, Kid, Product } from "../data/interfaces/index";
import { genders } from "../constants";

interface Props {
  handleProductsGenderFilter: (selectedGender: string) => void;
  checkedItems: string[];
  selectProduct: (selectedProducts: Product[]) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  setCheckedItems: (checkedItems: string[]) => void;
}

const SideBar = ({
  handleProductsGenderFilter,
  selectProduct,
  selectedCategory,
  setSelectedCategory,
  checkedItems,
  setCheckedItems,
}: Props) => {

  return (
    <>
      <aside className="sticky w-60 xl:top-[6vw]">
        {
          <div className="max-md:w-[83vw]">
            <CategoriesList
              setCheckedItems={setCheckedItems}
              selectProduct={selectProduct}
              selectedCategory={selectedCategory}
              handleSelectedCategory={(selectedCategory) =>
                setSelectedCategory(selectedCategory)
              }
              categories={categories}
            />
            <div className="pr-14 max-md:w-[83vw]">
              <ProductFilterList<Gender>
                filters={genders}
                checkedItems={checkedItems}
                handleItemClick={handleProductsGenderFilter}
              />
            </div>
            <div className="pr-14 max-md:w-[83vw]">
              <ProductFilterList<Kid>
                filters={kids}
                checkedItems={checkedItems}
                handleItemClick={handleProductsGenderFilter}
              />
            </div>
          </div>
        }
      </aside>
    </>
  );
};

export default SideBar;
