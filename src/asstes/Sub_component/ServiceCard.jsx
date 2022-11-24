
const ServiceCard = (props) => {
  return (
    <>
      <div className="card__container">
        <div className="card__image">
          <img src={`${process.env.PUBLIC_URL}/public_img/service_img/${props.image}`} alt="Not Found" />
        </div>
        <div className="card__header">{props.header}</div>

        <div className="card__desc">{props.desc}</div>
      </div>
    </>
  );
};

export default ServiceCard;
