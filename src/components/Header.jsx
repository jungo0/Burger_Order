import logoImg from "../assets/logo.jpeg";
import Button from "./UI/Button";
import { useContext } from "react";
import CartContext from "./store/CartContext";
export default function Header() {
  const cartctx = useContext(CartContext);

  const totalItems = cartctx.items.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restaurant" />
        <h1>Burger Order</h1>
      </div>
      <nav>
        <Button textOnly={true}>Cart ({totalItems})</Button>
      </nav>
    </header>
  );
}
