interface Props {
  imageURL: string;
  label: string;
  subtext: string;
}

const ServiceCard = ({ imageURL, label, subtext }: Props) => {
  return (
    <div className="w-full flex-1  rounded-[20px] px-10 py-16 shadow-3xl sm:w-[350px] sm:min-w-[350px]">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-coral-red">
        <img src={imageURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="mt-5 font-palanquin text-3xl font-bold leading-normal">
        {label}
      </h3>
      <p className="info-text mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
