import logoImg from "../assets/logo.jpeg";
import Button from "./UI/Button";
export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restaurant" />
        <h1>Burger Order</h1>
      </div>
      <nav>
        <Button textOnly={true}>Cart (0)</Button>
      </nav>
    </header>
  );
}
