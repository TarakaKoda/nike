import { CategoriesList } from "../components";
import GenderFilterList from "../components/GenderFilterList";
import { categories } from "../constants";
import { Product } from "../data/interfaces/index";

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
  setCheckedItems
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
              <GenderFilterList
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
