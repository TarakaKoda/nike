import {
  hoodiesAndSweatshirts,
  jackets,
  shoes,
  trousersAndTights,
  shorts,
  topsAndTShirts,
} from "../data";
import { Category, Product } from "../data/interfaces";

interface Props {
  selectProduct: (product: Product[]) => void;
  categories: Category[];
  handleSelectedCategory: (category: string) => void;
  selectedCategory: string;
}

const CategoriesList = ({
  selectProduct,
  categories,
  handleSelectedCategory,
  selectedCategory,
}: Props) => {
  return (
    <div>
      <ul className="text-md max-sm:text-1vw my-5 w-full overflow-hidden whitespace-nowrap rounded-md p-5 font-Helvetica font-medium max-xl:m-0 max-xl:flex max-xl:w-[83vw] max-xl:overflow-x-auto max-xl:p-0 max-xl:pt-1 max-xl:text-sm xl:-ml-5 xl:w-44 xl:whitespace-normal xl:p-2 xl:shadow-sm   ">
        {categories.map((category) => (
          <li
            className={`mx-1 mb-2 w-40 cursor-pointer rounded-xl bg-white p-2 text-black bg-blend-difference max-lg:font-normal md:mx-3 xl:mx-0 xl:mb-0 xl:text-[16px] xl:font-medium xl:hover:text-black ${
              category.categoryName === selectedCategory &&
              "max-xl:bg-black max-xl:text-white xl:text-black xl:underline xl:underline-offset-1"
            }`}
            key={category.id}
            onClick={() => {
              handleSelectedCategory(category.categoryName);
              if (category.categoryName === "Shoes") 
              selectProduct([...shoes]);
              if (category.categoryName === "Jackets")
                selectProduct([...jackets]);
              if (category.categoryName === "Hoodies & Sweatshirts")
                selectProduct([...hoodiesAndSweatshirts]);
              if (category.categoryName === "Trousers & Tights")
                selectProduct([...trousersAndTights]);
              if (category.categoryName === "Shorts")
                selectProduct([...shorts]);
              if (category.categoryName === "Tops & T-Shirts")
                selectProduct([...topsAndTShirts]);
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
