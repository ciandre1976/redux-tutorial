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
  },
});

export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;
