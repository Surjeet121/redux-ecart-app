import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="home__container">
      <h2 style={{ fontWeight: 400 }}>
        Welcome to E-Commerce <span> app !</span></h2>
        <NavLink id="resto_btn" to="/product">
          GO FOR SHOPPING
        </NavLink>
    </div>
  );
};
export default Home;
