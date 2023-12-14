import { useState } from "react";
import { arrowRight } from "../../assets/icons";
import { bigShoe1 } from "../../assets/images";
import { Button, ShoeCard } from "../../components";
import { shoes, statistics } from "../../constants";

const Hero = () => {
  const [bigShoeImage, setBigShoeImage] = useState(bigShoe1);

  return (
    <section
      className="max-container flex min-h-screen w-full flex-col justify-center gap-10 lg:flex-row"
      id="home"
    >
      <div className="max-xl:padding-x relative flex w-full flex-col items-start justify-center pt-28 lg:w-2/5">
        <p className="font-montserrat text-xl text-coral-red">
          Our Summer collections
        </p>
        <h1 className="mt-10 font-palanquin text-8xl font-bold max-sm:text-[72px] max-sm:leading-[82px]">
          <span className="relative z-10 pr-10 lg:whitespace-nowrap lg:bg-white">
            The New Arrival
          </span>
          <br />
          <span className="mt-3 inline-block text-coral-red">Nike</span>{" "}
          <span className="relative z-10 inline-block lg:bg-white lg:pr-12">
            Shoes
          </span>
        </h1>
        <p className="mb-14 mt-6 font-montserrat text-lg leading-8 text-slate-gray sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button iconURL={arrowRight} label="Shop now" />
        <div className="mt-20 flex w-full flex-wrap items-start justify-start gap-16">
          {statistics.map((state) => (
            <div key={state.label}>
              <p className="font-palanquin text-4xl font-bold">{state.value}</p>
              <p className="font-montserrat leading-7 text-slate-gray">
                {state.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex flex-1 items-center justify-center bg-primary bg-hero bg-cover bg-center max-xl:py-40 xl:min-h-screen">
        <img
          src={bigShoeImage}
          alt="Shoe collection"
          width={610}
          height={50}
          className="relative z-10 object-contain"
        />
        <div className="absolute -bottom-[5%] flex gap-4 max-sm:px-6 sm:left-[10%] sm:gap-6">
          {shoes.map((shoe) => (
            <div>
              <ShoeCard
                imgURL={shoe}
                bigShoeImage={bigShoeImage}
                changeBigShoeImage={(currentBigShoe) => {
                  setBigShoeImage(currentBigShoe);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
