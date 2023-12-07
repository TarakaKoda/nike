import { offer } from "../assets/images";
import { Button } from "../components";

const SpecialOffer = () => {
  return (
    <section className="max-container flex flex-wrap items-center justify-center gap-10 max-xl:flex-col-reverse">
      <div className="flex-1 ">
        <img width={773} height={687} src={offer} alt="Offers" />
      </div>
      <div className="flex w-full flex-1 flex-col object-contain max-xl:items-center max-xl:justify-center">
        <h2 className="font-palanquin text-4xl font-bold capitalize lg:max-w-lg ">
          <span className=" text-coral-red">Special</span> Offer
        </h2>
        <p className="info-text mt-4 xl:max-w-lg">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="info-text mt-6 xl:max-w-lg">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11 flex gap-4">
          <Button label="View details" />
          <Button garyButton={true} label="Learn more" />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
