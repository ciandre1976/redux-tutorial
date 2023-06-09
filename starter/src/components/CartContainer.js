import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { openModal } from "../features/Modal/modalSlice";

export default function CartContainer() {
  const dispatch = useDispatch();
  const { cartItems, amount, total } = useSelector((store) => store.cart);

  if (amount < 1) {
    return (
      <>
        <section className="cart-total">
          <header>
            <h2>Racun</h2>
            <h4 className="empty-cart">je prazan</h4>
          </header>
        </section>
      </>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>tvoj racun</h2>
      </header>
      <div>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} {...cartItem} />
        ))}
      </div>
      <footer>
        <div className="cart-total">
          <hr />
          <h4>
            ukupno <span>${total.toFixed(2)}</span>
          </h4>
          <button className="clear-btn" onClick={() => dispatch(openModal())}>
            ocisti torbu
          </button>
        </div>
      </footer>
    </section>
  );
}
