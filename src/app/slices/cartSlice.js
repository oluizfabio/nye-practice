import { createSlice } from "@reduxjs/toolkit";
import reduceListByProp from "utils/reduceListByProp";

export const productSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    loading: false,
  },
  reducers: {
    removeCartItems: (state, action) => {
      state.items = reduceListByProp(state.items, action.payload, "id");
    },
    addCartItems: (state, action) => {
      state.items = state.items.concat(action.payload);
    },
  },
});

export const selectCartItems = (state) => state.cart.items;
export const { removeCartItems, addCartItems } = productSlice.actions;

export default productSlice.reducer;
