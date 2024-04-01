import { useContext } from "react";

import Modal from "./UI/Modal.jsx";
import CartContext from "../store/CartContext.jsx";
import Input from "./UI/Input.jsx";
import Button from "./UI/Button.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";

export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce((totalPrice, item) => {
    const itemPrice = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
    return totalPrice + item.quantity * itemPrice;
  }, 0);

  function handleClose() {
    userProgressCtx.hideCheckout();
  }

  return (
    <Modal open={userProgressCtx.progress === "checkout"} onClose={handleClose}>
      <form>
        <h2>결제</h2>
        <p>총 금액: {cartTotal}</p>

        <Input label="이름" type="text" id="name" />
        <Input label="이메일" type="email" id="email" />
        <Input label="주소" type="text" id="street" />
        <div className="control-row">
          <Input label="우편번호" type="text" id="postal-code" />
          <Input label="도시" type="text" id="city" />
        </div>

        <p className="modal-actions">
          <Button type="button" textOnly onClick={handleClose}>
            닫기
          </Button>
          <Button>결제하기</Button>
        </p>
      </form>
    </Modal>
  );
}
