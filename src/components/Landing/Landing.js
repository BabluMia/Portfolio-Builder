import React from "react";
import landingImg from "../../assets/img/hero.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./landing.css";
import { Link } from "react-router-dom";
const Landing = () => {
  var settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",
  };
  return (
    <div className="landing_container_main">
      <div className="landing_container shadow-lg">
        <div className="landing_inner_container ">
          <div className="landing_text z_index_2">
            <h1>Make Portfolio</h1>
            <p>Make your portfolio completely free with less time..</p>
            <h5>Free-Quick-Fast</h5>
            <div className="slickAndImageContainer  img_container_md_sm ">
              <Slider {...settings}>
                <div className="landingImg_Container">
                  <img src={landingImg} alt="" />
                </div>
                <div className="landingImg_Container">
                  <img src={landingImg} alt="" />
                </div>
              </Slider>
            </div>

            <Link to="/login" className="btn btn-outline-danger mt-3 start_now_btn p-4">
              Start Now Free
            </Link>
          </div>
        </div>

        <div className="z_index_2" id="">
          <div className="slickAndImageContainer_lg img_container_lg">
            <Slider {...settings}>
              <div className="landingImg_Container">
                <img src={landingImg} alt="" />
              </div>
              <div className="landingImg_Container">
                <img src={landingImg} alt="" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
