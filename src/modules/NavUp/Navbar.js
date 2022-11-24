import { useState } from "react";
import RLogo from "./RLogo.png";
import "./css/humburger.css";

const NavbarUp = (props) => {
  const [open, setopen] = useState(0);
  const [p_menu, set_p_menu] = useState("p_menu_hide");
  const [active, set_active] = useState("");

  const open_phn_nav =()=>{
    console.log("Open");
    set_p_menu("p_menu_show");
    set_active("is-active");
    props.blur_func(1);
    setopen(1);
  }

  const close_phn_nav =()=>{
    console.log("close");
      set_p_menu("p_menu_hide");
      props.blur_func(0);
      set_active("");

      setopen(0);
  }

  const hum_menu_func = () => {
    console.log("clicked");
    if (open === 0) {
     open_phn_nav()
    } else {
      close_phn_nav()
    }
  };


  return (
    <>
      <div className="p_nav">
        <div className="p_brand">
          <a href="/#home">
            <img className="p_brand_img" src={RLogo} alt="Rakib" />
          </a>
        </div>

        <button
          class={`hamburger hamburger--vortex hum_btn   ${active}`}
          onClick={hum_menu_func}
          type="button"
        >
          <span class="hamburger-box set_color">
            <span class="hamburger-inner set_color"></span>
          </span>
        </button>

        <div className={`p_menu ${p_menu}`}>
          <a href="/#about" onClick={()=>close_phn_nav()}>
            <span>01.</span>About
          </a>
          <a href="/#services"  onClick={()=>close_phn_nav()}>
            <span>02.</span>Services
          </a>
          <a href="/#projects" onClick={()=>close_phn_nav()}>
            <span>03.</span>Projects
          </a>
          <a href="/#contact" onClick={()=>close_phn_nav()}>
            <span>04.</span>Contact
          </a>
          <button className="resume_btn">Resume</button>
        </div>
      </div>

      {/* <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
      </Switch> */}
    </>
  );
};

export default NavbarUp;
