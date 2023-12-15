import { star } from "../assets/icons";

interface Props {
  imgURL: string;
  price: string;
  name: string;
}

const PopularProductCard = ({ imgURL, price, name }: Props) => {
  return (
    <div className="flex  w-full flex-1 flex-col max-sm:w-full">
      <img src={imgURL} alt={name} width={280} height={280} />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} width={24} height={24} alt="rating" />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>
      <h3 className=" mt-2 font-palanquin text-2xl font-semibold leading-normal">
        {name}
      </h3>
      <p className="text-md mt-2 font-montserrat font-semibold leading-normal text-coral-red">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
