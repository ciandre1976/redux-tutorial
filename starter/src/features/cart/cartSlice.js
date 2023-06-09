import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import cartItems from "../../cartItems";

const url = "https://course-api.com/react-useReducer-cart-project";

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

export const getCartItem = createAsyncThunk("cart/getCartItem", () => {
  return fetch(url)
    .then((res) => res.json())
    .catch((err) => console.log(err));
});

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    clearCart: (store) => {
      store.cartItems = [];
    },
    removeItems: (store, action) => {
      store.cartItems = store.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    increase: (store, { payload }) => {
      const cardItem = store.cartItems.find((item) => item.id === payload);
      cardItem.amount = cardItem.amount + 1;
    },
    decrease: (store, { payload }) => {
      const cardItem = store.cartItems.find((item) => item.id === payload);
      cardItem.amount = cardItem.amount - 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let totals = 0;

      state.cartItems.forEach((item) => {
        amount += item.amount;
        totals += item.amount * item.price;
      });

      state.amount = amount;
      state.total = totals;
    },
  },
  extraReducers: {
    [getCartItem.pending]: (state) => {
      state.isLoading = true;
    },
    [getCartItem.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.cartItems = action.payload;
    },
    [getCartItem.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { clearCart, removeItems, increase, decrease, calculateTotals } =
  cartSlice.actions;
export default cartSlice.reducer;
