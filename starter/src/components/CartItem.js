import { ChevronDown, ChevronUp } from "../icons";

export default function CartItem({ id, img, title, price, amount }) {
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button className="remove-btn">remove</button>
      </div>
      <div>
        <button className="amount-btn">
          <ChevronUp />
        </button>
        <p className="amount">0</p>
        <button className="amount-btn">
          <ChevronDown />
        </button>
      </div>
    </article>
  );
}
