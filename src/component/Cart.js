import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { decrement, getTotal, increment } from "../redux/cartSlice";
import "./myStyle.css";

const Cart = () => {
  const { cartItems, cartTotalAmount } = useSelector((state) => state.cart);
  const { cart } = useSelector((state) => state);
  // console.log("store====>>10", cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDecrememt = (item) => {
    dispatch(decrement(item));
  };
  const handleIncrememt = (item) => {
    dispatch(increment(item));
  };

  useEffect(() => {
    dispatch(getTotal());
  }, [cart]);

  const handleSubmit = () => {
    alert(`Your order palaced !`);
    navigate("/product");
  };

  return (
    <div className="your__cart">
      <table className="table table-bordered tableContent">
        <thead>
          <tr scope="row">
            <th>Sr.No </th>
            <th>Product </th>
            <th>Price </th>
            <th>Quantity </th>
            <th>Total </th>
            <th colSpan="2">Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems && cartItems.length > 0 ? (
            cartItems.map((el, i) => {
              return (
                <tr key={i}>
                  <td>{++i}.</td>
                  <td>{el.title}</td>
                  <td>{el.price}</td>
                  <td>{el.quantity}</td>
                  <td>{el.price * el.quantity}</td>
                  <td>
                    <button
                      id="inc__btn"
                      onClick={() => handleIncrememt(el)}
                      style={{ marginLeft: "3px" }}
                    >
                      +
                    </button>
                  </td>
                  <td>
                    <button id="dec__btn" onClick={() => handleDecrememt(el)}>
                      -
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <h4
              style={{
                color: "red",
                textAlign: "center",
                letterSpacing: "2px",
              }}
            >
              Your cart is Empty !
              <button
                id="emptyToAddToCart"
                onClick={() => navigate("/product")}
              >
                GO FOR SHOPPING
              </button>
            </h4>
          )}
        </tbody>
      </table>
      <hr id="hrline" />
      {cartItems.length > 0 ? (
        <div className="total__checkOut">
          <div id="ttl">
            Total product amount : <span> ₹ {cartTotalAmount} </span>
          </div>

          <button className="btn_palace_order" onClick={handleSubmit}>
            Submit your order !
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Cart;
