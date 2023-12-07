interface Shoe {
  thumbnail: string;
  bigShoe: string;
}
interface Props {
  imgURL: Shoe;
  bigShoeImage: string;
  changeBigShoeImage: (bigShoeImage: string) => void;
}
const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImage }: Props) => {
  const handleClick = () => {
    if (bigShoeImage !== imgURL.bigShoe) changeBigShoeImage(imgURL.bigShoe);
  };

  return (
    <div
      className={`rounded-xl border-2 ${
        bigShoeImage === imgURL.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex items-center justify-center rounded-xl bg-card bg-cover bg-center max-sm:p-4 sm:h-40 sm:w-40">
        <img
          className="object-contain"
          width={127}
          height={103}
          src={imgURL.thumbnail}
          alt="Collection of shoes"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
