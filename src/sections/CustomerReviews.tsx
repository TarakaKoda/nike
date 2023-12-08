import { ReviewCard } from "../components";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="text-center font-palanquin text-4xl font-bold">
        What Our
        <span className="text-coral-red"> Customers</span> Say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="mt-24 flex flex-1 items-center justify-evenly gap-14 max-lg:flex-col ">
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            customerName={review.customerName}
            imgURL={review.imgURL}
            feedback={review.feedback}
            rating={review.rating}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
