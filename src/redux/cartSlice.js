import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  count: 0,
  reducers: {
    increment(state, action) {

      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += 1;
      } else {
        const tempItems = { ...action.payload, quantity: 1 };
        state.cartItems.push(tempItems);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    // removeItems(state, action) {
    //   const filterdItems = state.cartItems.filter(
    //     (item) => item.id !== action.payload.id
    //   );    
    //   state.cartItems = filterdItems;
    //   localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    // },

    decrement(state, action) {
      if (state.cartItems.length > 0 ) {
        const itemIndex = state.cartItems.findIndex(
          (item) => item.id === action.payload.id
        );
        if (state.cartItems[itemIndex].quantity > 1) {
          state.cartItems[itemIndex].quantity -= 1;

        } else if (state.cartItems[itemIndex].quantity === 1) {
          const filterdItems = state.cartItems.filter(
            (item) => item.id !== action.payload.id
          );
          state.cartItems = filterdItems;
        } 
        
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },
    getTotal(state,action){
      let {total, quantity} = state.cartItems.reduce((cartTotal, cartItem)=>{
        const{price, quantity}= cartItem;
        const itemtotal = price*quantity;

        cartTotal.total +=itemtotal
        cartTotal.quantity += quantity

        return cartTotal ;

      },{
        total:0,
        quantity:0.,
      });

      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total
         
    }
  },
});

export const { increment, decrement , getTotal } = cartSlice.actions;
export default cartSlice.reducer;
