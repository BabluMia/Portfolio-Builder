// import rk from "./img/rk.jpg";
// import rkr from "./img/rkr.png";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import "../../asstes/css/socialmedia.css";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <section id="about" className="full_screen" style={{backgroundColor:'#0A192F'}}>
        <div className="about_container">
          <div className="content_container">
            <div className="about_content">
              <h2>
                <span>01.</span>About
              </h2>
              <br />

              <p>
                Hello! I'm Rakib,a full stack developer ,Currently doing an internship as a Django Developer. completed BSC in{" "}
                <span>Daffodl International University.</span>
                <br />
                <br />
                I love making stuff for the internet, whether it's website,blogs, apps, or something in between. My aim is to create products that are
                user friendly,easy to use and perfect.
                <br />
                Here are a few technologies I've been working with recently:
                <ul className="about_ul">
                  <li>
                    <span>
                      <ArrowRightIcon className="li_arrow" />
                    </span>
                    Python
                  </li>
                  <li>
                    <span>
                      <ArrowRightIcon className="li_arrow" />
                    </span>
                    Django
                  </li>
                  <li>
                    <span>
                      <ArrowRightIcon className="li_arrow" />
                    </span>
                    JavaScript (ES6+)
                  </li>
                  <li>
                    <span>
                      <ArrowRightIcon className="li_arrow" />
                    </span>
                    React
                  </li>
                  <li>
                    <span>
                      <ArrowRightIcon className="li_arrow" />
                    </span>
                    And Obviously HTML,CSS
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
        <div>
        
        </div>
      </section>
    </>
  );
};

export default About;
