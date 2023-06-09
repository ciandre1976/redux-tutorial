import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import { calculateTotals, getCartItem } from "./features/cart/cartSlice";
import Modal from "./components/Modal";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItem());
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <h3>Loading...</h3>
      </div>
    );
  }

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
