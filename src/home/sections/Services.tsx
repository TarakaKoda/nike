import { ServiceCard } from "../components";
import { services } from "../constants";

const Services = () => {
  return (
    <section className="max-container flex flex-wrap justify-center gap-9">
      {services.map((service) => (
        <ServiceCard
          label={service.label}
          imageURL={service.imgURL}
          subtext={service.subtext}
          key={service.label}
        ></ServiceCard>
      ))}
    </section>
  );
};

export default Services;
