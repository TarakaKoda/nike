import { useProducts } from "../hooks";
import { Category, Product } from "../data/interfaces";

interface Props {
  selectProduct: (product: Product[]) => void;
  categories: Category[];
  handleSelectedCategory: (category: string) => void;
  selectedCategory: string;
  setCheckedItems: (checkedItems: string[]) => void;
}

const CategoriesList = ({
  selectProduct,
  categories,
  handleSelectedCategory,
  selectedCategory,
  setCheckedItems
}: Props) => {
  const { selectedProductCategory } = useProducts();
  return (
    <div>
      <ul className="text-md max-sm:text-1vw my-5 w-full overflow-hidden whitespace-nowrap rounded-md p-5 font-Helvetica font-medium max-md:m-0 max-md:flex max-md:w-[83vw] max-md:overflow-x-auto max-md:p-0 max-md:pt-1 max-md:text-sm md:-ml-5 md:w-44 md:whitespace-normal md:p-2">
        {categories.map((category) => (
          <li
            className={`mx-1 mb-2 w-40 cursor-pointer rounded-xl bg-white p-2 text-black bg-blend-difference max-lg:font-normal md:mx-3 md:mb-0 xl:mx-0 xl:text-[16px] xl:font-medium xl:hover:text-black ${
              category.categoryName === selectedCategory &&
              "max-md:bg-black max-md:text-white md:text-black md:underline md:underline-offset-1"
            }`}
            key={category.id}
            onClick={() => {
              handleSelectedCategory(category.categoryName);
              selectedProductCategory(category.categoryName, selectProduct);
              setCheckedItems([])
            }}
          >
            <p>{category.categoryName}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesList;
