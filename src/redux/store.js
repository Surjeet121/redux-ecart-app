import { configureStore } from "@reduxjs/toolkit";

import cartReducer, { getTotal } from "./cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// store can be update total Cart value as our component mount 1st time

store.dispatch(getTotal()) 