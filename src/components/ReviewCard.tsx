import { star } from "../assets/icons";

interface Props {
  customerName: string;
  imgURL: string;
  feedback: string;
  rating: number;
}

const ReviewCard = ({ customerName, imgURL, feedback, rating }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        className="h-[120px] w-[120px] rounded-full object-cover"
        src={imgURL}
        alt={customerName}
      />
      <p className="info-text mt-6 max-w-sm break-words text-center font-montserrat text-lg text-slate-gray">
        {feedback}
      </p>
      <div className="mt-3 flex items-center justify-start gap-2.5">
        <img src={star} width={24} height={24} alt="rating" />
        <p className="font-montserrat text-xl text-slate-gray">({rating})</p>
      </div>
      <h3 className="mt-1 text-center font-palanquin text-3xl font-bold ">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
