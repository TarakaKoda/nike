import { arrow, nike } from "../assets/icons";
import { useState } from "react";
import { Filters } from "../data/interfaces";

interface Props<T> {
  filters: Filters<T>;
  handleItemClick: (genderName: string) => void;
  checkedItems: string[];
}

const ProductFilterList = <T extends { id: number; itemName: string }>({
  handleItemClick,
  checkedItems,
  filters,
}: Props<T>) => {
  const [isGenderOpen, setGenderOpen] = useState(true);

  return (
    <div
      className={`mr-50 -ml-2 w-full overflow-hidden overflow-y-hidden border-y-2 py-6 transition duration-300 ease-in-out ${
        isGenderOpen ? "h-full" : "h-14"
      }`}
    >
      <div
        className="-mt-1 flex cursor-pointer justify-between"
        onClick={() => setGenderOpen(!isGenderOpen)}
      >
        <p
          className={`font-Helvetica font-bold  text-slate-900 ${
            !isGenderOpen && "pb-3"
          }`}
        >
          {filters.title}
        </p>
        <img
          className={`h-8 w-8 transition duration-300 ease-in-out ${
            isGenderOpen ? "rotate-180" : ""
          }`}
          src={arrow}
          alt="arrow"
        />
      </div>
      <ul className="flex flex-col gap-2">
        {filters.FiltersList.map((filter) => (
          <li
            className="text-md flex cursor-pointer gap-2 font-Helvetica font-medium"
            key={filter.id}
            onClick={() => handleItemClick(filter.itemName)}
          >
            {" "}
            <div className="flex h-5 w-5 items-center justify-center rounded-md border-2 border-gray-500">
              {checkedItems.includes(filter.itemName) && (
                <img className="h-5 w-5" src={nike} alt="nike" />
              )}
            </div>
            <p>{filter.itemName}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductFilterList;
