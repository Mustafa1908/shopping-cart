import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { NumberOfProductContext } from "../../App";
import header from "./Header.module.css";

export default function Header() {
  const [productCount, setProductCount] = useContext(NumberOfProductContext);

  return (
    <>
      <header className={header.header}>
        <Link to={"/"}>HomePage</Link>
        <Link to={"jewelery"}>jewelery</Link>
        <Link to={"electronics"}>electronics</Link>
        <Link to={"shoppingcard"}>
          <span className={header.shoppingIcon + " material-symbols-outlined"}>
            shopping_cart
          </span>
          <span>{productCount}</span>
        </Link>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}
