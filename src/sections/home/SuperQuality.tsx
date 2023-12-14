import { arrowRight } from "../../assets/icons";
import { shoe8 } from "../../assets/images";
import { Button } from "../../components";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="max-container flex w-full items-center justify-between gap-10 max-lg:flex-col"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl font-bold capitalize lg:max-w-lg ">
          We Provide You
          <span className=" text-coral-red"> Super</span>
          <br />
          <span className=" text-coral-red">Quality </span> Shoes
        </h2>
        <p className="info-text mt-4 lg:max-w-lg">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="info-text mt-6 lg:max-w-lg">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button iconURL={arrowRight} label="Shop now" />
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <img
          alt="Shoe"
          className="object-contain"
          height={522}
          src={shoe8}
          width={570}
        />
      </div>
    </section>
  );
};

export default SuperQuality;
