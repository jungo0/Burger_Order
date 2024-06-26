import { useContext } from "react";

import Modal from "./UI/Modal.jsx";
import CartContext from "../store/CartContext.jsx";
import Button from "./UI/Button.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";
import CartItem from "./CartItem.jsx";

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce((totalPrice, item) => {
    const itemPrice = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
    return totalPrice + item.quantity * itemPrice;
  }, 0);

  function handleCloseCart() {
    userProgressCtx.hideCart();
  }

  function hadleChecktout() {
    userProgressCtx.showCheckout();
  }

  return (
    <Modal
      className="cart"
      open={userProgressCtx.progress === "cart"}
      onClose={userProgressCtx.progress === "cart" ? handleCloseCart : null}
    >
      <h2>장바구니</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onIncrease={() => cartCtx.addItem(item)}
            onDecrease={() => cartCtx.removeItem(item.id)}
          />
        ))}
      </ul>
      <p className="cart-total">{cartTotal}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>
          닫기
        </Button>
        {cartCtx.items.length > 0 && (
          <Button onClick={hadleChecktout}>구매하기</Button>
        )}
      </p>
    </Modal>
  );
}
