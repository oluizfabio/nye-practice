import { createSlice } from "@reduxjs/toolkit";
import { getProductsService } from "services/productsServices";
import reduceListByProp from "utils/reduceListByProp";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    loading: false,
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    addProducts: (state, action) => {
      state.products = state.products.concat(action.payload);
    },
    removeProducts: (state, action) => {
      state.products = reduceListByProp(state.products, action.payload, "id");
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const {
  setProducts,
  addProducts,
  removeProducts,
  setLoading,
} = productSlice.actions;

export const fetchProducts = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const result = await getProductsService();
    dispatch(
      setProducts(
        result.map((item) => ({ ...item, price: Number(item.price) }))
      )
    );
    dispatch(setLoading(false));
  } catch (error) {
    console.log(error.message);
    dispatch(setLoading(false));
  }
};

export const selectProductsLoading = (state) => state.product.loading;
export const selectProducts = (state) => state.product.products;

export default productSlice.reducer;
