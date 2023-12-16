import { useAllProducts } from "../hooks";
import { Product } from "../data/interfaces";

interface Props {
  handleAllProducts: (allProducts: Product[]) => void;
  setSelectedCategory: (category: string) => void;
  hideFilters: boolean;
  selectedCategory: string;
  numberOfProducts: number;
  handleFiltersDisplay: (hideFilters: boolean) => void;
}

const CategoriesHeading = ({
  handleAllProducts,
  setSelectedCategory,
  selectedCategory,
  numberOfProducts,
  handleFiltersDisplay,
  hideFilters,
}: Props) => {
  const allProducts = useAllProducts();
  return (
    <div className="max-container top-0 z-10 -mt-[7vw] flex w-[92vw] justify-between bg-white max-xl:sticky max-xl:m-0 max-xl:ml-14 max-md:ml-6 xl:sticky">
      <div className="">
        <div className="flex gap-1 font-Helvetica text-sm font-medium  text-gray-950">
          <p
            className="hover:text-black hover:underline hover:underline-offset-1"
            onClick={() => {
              handleAllProducts(allProducts);
              setSelectedCategory("");
            }}
          >
            {selectedCategory && "All Products"}
          </p>
          <p className="">{selectedCategory && `/ ${selectedCategory}`}</p>
        </div>
        <h2 className="p-0 py-3 font-Helvetica  text-xl font-bold max-xl:m-1 xl:m-0">
          {" "}
          {selectedCategory ? selectedCategory : "All Products"}
          <p className="font-Helvetica text-sm font-normal text-slate-gray">
            Items {numberOfProducts}
          </p>
        </h2>
      </div>
      <div
        className="mb-2 mr-5 flex w-60 cursor-pointer items-end justify-end max-md:hidden"
        onClick={() => console.log(handleFiltersDisplay(!hideFilters))}
      >
        <p className="text-md b mx-2 font-Helvetica font-medium ">
          {hideFilters ? "Hide" : "Show"} Filters
        </p>
        <button>
          <svg
            aria-hidden="true"
            className="icon-filter-ds"
            focusable="false"
            viewBox="0 0 24 24"
            role="img"
            width="24px"
            height="24px"
            fill="none"
          >
            <path
              stroke="currentColor"
              strokeWidth="1.5"
              d="M21 8.25H10m-5.25 0H3"
            ></path>
            <path
              stroke="currentColor"
              strokeWidth="1.5"
              d="M7.5 6v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
              clipRule="evenodd"
            ></path>
            <path
              stroke="currentColor"
              strokeWidth="1.5"
              d="M3 15.75h10.75m5 0H21"
            ></path>
            <path
              stroke="currentColor"
              strokeWidth="1.5"
              d="M16.5 13.5v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CategoriesHeading;
