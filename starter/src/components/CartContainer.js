import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";

export default function CartContainer() {
  const dispatch = useDispatch();
  const { cartItems, amount, total } = useSelector((store) => store.cart);
  console.log(cartItems, amount, total);
  if (amount < 1) {
    return (
      <>
        <section className="cart-total">
          <header>
            <h2>your bag</h2>
            <h4 className="empty-cart">is currently empty</h4>
          </header>
        </section>
      </>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
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
            total <span>${total}</span>
          </h4>
          <button className="clear-btn" onClick={() => dispatch(clearCart())}>
            CLEAR
          </button>
        </div>
      </footer>
    </section>
  );
}
