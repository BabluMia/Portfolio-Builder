import React from "react";
import About from "../about/About";
import PortHero from "../Hero/PortHero";
import MuiNav from "../NavUp/MuiNav";
import NavbarUp from "../NavUp/Navbar";

const Home = () => {

  return (
    <div>
      <MuiNav />
      <PortHero  />
      <About/>
    </div>
  );
};

export default Home;
