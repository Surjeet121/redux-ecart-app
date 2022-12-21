import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import cartLogo from "../images/shopping_cart_png.jpg"

const Nav = () => {
  const[isTrue , setIsTrue ] = useState(false)
  const togglecart = ()=>{
    if(isTrue === false){
      setIsTrue(true)
    }
    else{
      setIsTrue(false)
    }
  }

  const { cartTotalQuantity } = useSelector((state) => state.cart);
  return (
    <div className="nav__container">
      <span>e-commerce app !</span>
      <NavLink className="navLink" to="/">
        Home
      </NavLink>
      {
        !isTrue ? 
        <NavLink className="navLink cartLogo" to="/cart" onClick={togglecart}>
        <img src={cartLogo} style={{ height: "44px", borderRadius: "50%" }} alt='' />
        <span className="cartCount">{cartTotalQuantity} </span>
      </NavLink>
        : 
        <NavLink className="navLink cartLogo" to="/product" onClick={togglecart}>
        <img src={cartLogo} style={{ height: "44px", borderRadius: "50%" }} alt=''/>
        <span className="cartCount">{cartTotalQuantity} </span>
      </NavLink>
      }
    </div>
  );
};

export default Nav;
