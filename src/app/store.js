import { configureStore } from "@reduxjs/toolkit";
import productSlice from "app/slices/productSlice";
import cartSlice from "app/slices/cartSlice";

export default configureStore({
  reducer: {
    product: productSlice,
    cart: cartSlice,
  },
});
