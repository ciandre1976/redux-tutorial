import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 1,
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
  },
});

export const { clearCart, removeItems, increase, decrease } = cartSlice.actions;
export default cartSlice.reducer;
