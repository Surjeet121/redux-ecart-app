import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, getTotal } from "./redux/cartSlice";

import img1 from "./images/burger.jpeg";
import img2 from "./images/coke.jpeg";
import img3 from "./images/fries.jpeg";
import img4 from "./images/pepsi.jpeg";
import img5 from "./images/burger3.jpeg";

export const Product = () => {
  const [products, setProducts] = useState([
    {"id": 1,"title": "Burger", "price" : 20 , "quantity": 1, "image": img1 },
    {"id": 2,"title": "Coke", "price" :  30 , "quantity": 1, "image": img2 },
    {"id": 3,"title": "Fries", "price" : 40 , "quantity": 1, "image": img3 },
    {"id": 4,"title": "Pepsi", "price" : 50 , "quantity": 1, "image": img4 },
    {"id": 6,"title": "Burger", "price" : 60 , "quantity": 1, "image": img5 },
      // {"id": 8,"title": "Burger", "price" : 90 , "quantity": 1, image: './images/burger6.jpeg' },
      // {"id": 7,"title": "Burger6", "price" : 80 , "quantity": 1, image: '../images/burger6.jpeg' },
  ]);
  const[query, setQuery] = useState('')
  // console.log(query)

  const { cart } = useSelector((store) => store);
  const dispatch = useDispatch();

  const handleIncrement = (product) => {
    dispatch(increment(product));
  };

  useEffect(() => {
    dispatch(getTotal());

  }, [cart]);

  return (
    <div className="products__wrapper">
      <div className="search__product">
        <input type="text" placeholder="Search your product here..." onChange={(e)=>setQuery(e.target.value)}/>
      </div>
      <div className="products__container">
        {
          products.filter((product)=> product.title.toLowerCase().includes(query))
          .map((product) => (
            <div className="card" key={product.id}>
              <img src={product.image} alt="product_img"  />
              <p>Product : {product.title}</p>
              <p>Price: ₹{product.price}</p>
              <button
                className="addToCart"
                onClick={() => handleIncrement(product)}
              >
                Add to cart
              </button>
            </div>
          ))
        }
      </div>
    </div>
  );
};
