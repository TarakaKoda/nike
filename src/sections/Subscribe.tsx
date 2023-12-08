import { Button } from "../components";

const Subscribe = () => {
  return (
    <section
      className="max-container flex items-center justify-between gap-10 max-lg:flex-col"
      id={"contact-us"}
    >
      <h3 className="font-palanquin text-4xl font-bold leading-[68px] max-lg:text-center lg:max-w-md">
        Sign Up from
        <span className="text-coral-red"> Updates</span> & Newsletter
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="text" placeholder="subscribe@nike.com" className="input" />
        <div className="flex items-center max-sm:w-full  max-sm:justify-end">
          <Button fullWidth={true} label="Sign Up" />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
