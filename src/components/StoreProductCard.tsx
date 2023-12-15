import { useState } from "react";
import { Product } from "../data/interfaces";
import ColorWays from "./ColorWays";

interface Props {
  product: Product;
}

const StoreProductCard = ({
  product: {
    images,
    isBestSeller,
    title,
    subtitle,
    colorways,
    price,
    specialLabel,
  },
}: Props) => {
  const [currentImage, setCurrentImage] = useState(images.portraitURL);

  const [isHover, setIsHover] = useState(true);

  return (
    <div
      className="my-8 cursor-pointer overflow-hidden  max-sm:min-h-[350px]  max-sm:flex-1"
      onMouseEnter={() => {
        if (colorways.length <= 1) {
          return setIsHover(true);
        }
        setIsHover(false);
      }}
      onMouseLeave={() => {
        setIsHover(true);
      }}
    >
      <div className="flex items-center justify-center rounded-xl">
        <img
          className=" w-full object-cover"
          src={currentImage}
          alt="Collection of products"
        />
      </div>

      {!isHover && (
        <ColorWays
          totalColor={colorways.length}
          changeCurrentImage={(currentImage) => {
            setCurrentImage(currentImage);
          }}
          currentImage={currentImage}
          differentColor={colorways}
        />
      )}
      {isHover && (
        <p className=" mt-1 font-Helvetica font-semibold text-amber-800">
          {specialLabel && specialLabel}
        </p>
      )}
      {isBestSeller && isHover && (
        <p className=" mt-2 font-Helvetica font-bold text-amber-800">
          Bestseller
        </p>
      )}
      <h3 className=" mt-2 font-Helvetica font-semibold leading-normal text-slate-950 text-opacity-80">
        {isHover && title}
      </h3>
      <h3 className="mt-2 font-Helvetica font-medium text-gray-400">
        {isHover && subtitle}
        <br />
        {isHover && `${colorways.length} Colors`}
      </h3>
      {!isHover && (
        <p className=" -mt-5 font-Helvetica font-semibold text-amber-800">
          {specialLabel && specialLabel}
        </p>
      )}
      <h3 className=" text-md mt-1 font-Helvetica font-semibold leading-normal text-slate-950 text-opacity-80">
        MRP: &#8377; {price.currentPrice}.00
      </h3>
    </div>
  );
};

export default StoreProductCard;
