import CategoriesList from "../../components/CategoriesList";
import { categories } from "../../constants/";
import { Product } from "../../data/interfaces";

interface Props {
  selectProduct: (selectedProducts: Product[]) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const SideBar = ({
  selectProduct,
  selectedCategory,
  setSelectedCategory,
}: Props) => {
  return (
    <>
      <aside className="sticky w-60 xl:top-[6vw] ">
        {
          <div className="xl:max-w-[25%]">
            <CategoriesList
              selectProduct={selectProduct}
              selectedCategory={selectedCategory}
              handleSelectedCategory={(selectedCategory) =>
                setSelectedCategory(selectedCategory)
              }
              categories={categories}
            />
          </div>
        }
      </aside>
    </>
  );
};

export default SideBar;
