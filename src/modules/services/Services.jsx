import ServiceCard from "./Sub_component/ServiceCard";
import ServiceData from "./Sub_component/ServiceData";
import RKLogo from "./img/LogoRak1b.png";

const Services = () => {
  return (
    <>
      <section id="services" className="full_screen">
        <div className="service_header">
          <h2>
            <span>03.</span>Services
          </h2>
        </div>
        <div class="service_container">
          <div className="service_cards_container">
            {ServiceData.map((val, index) => {
              return (
                <ServiceCard
                  image={val.image}
                  header={val.header}
                  desc={val.desc}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
