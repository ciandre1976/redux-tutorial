import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 0,
  total: 0,
  isLoading: true,
};

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
});

export const { clearCart, removeItems, increase, decrease, calculateTotals } =
  cartSlice.actions;
export default cartSlice.reducer;
