import { closeModal } from "../features/Modal/modalSlice";
import { clearCart } from "../features/cart/cartSlice";

import { useDispatch } from "react-redux";

export default function Modal() {
  const dispatch = useDispatch();

  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Izbrisi sve artikle iz shop kartice?</h4>
        <div className="btn-container">
          <button
            className="btn confirm-btn"
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}
          >
            Da
          </button>
          <button
            className="btn clear-btn"
            onClick={() => dispatch(closeModal())}
          >
            Ne
          </button>
        </div>
      </div>
    </aside>
  );
}
