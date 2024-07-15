import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { NumberOfProductContext } from "../../app/App";
import LinkNavBar from "../LinkNavBar/LinkNavBar";
import header from "./Header.module.css";

export default function Header() {
  const [productCount, setProductCount] = useContext(NumberOfProductContext);

  return (
    <>
      <header className={header.header}>
        <div className={header.headerMain}>
          <div className={header.iconContainer}>
            <span
              className={header.shoppingIcon + " material-symbols-outlined"}
            >
              person
            </span>
            <span
              className={header.shoppingIcon + " material-symbols-outlined"}
            >
              favorite
            </span>
            <Link to={"shoppingcard"} className={header.headerIconLink}>
              <span
                className={header.shoppingIcon + " material-symbols-outlined"}
              >
                shopping_bag
              </span>
              <span className={header.shoppingCounter}>{productCount}</span>
            </Link>
          </div>
          <Link to={"/"} className={header.headerOneLink}>
            <h1 className={header.headerOne}>Gensia</h1>
          </Link>
        </div>
        <nav className={header.navBar}>
          <div className={header.navBarLinkContainer}>
            <LinkNavBar linkLocation={"jewelery"} linkText={"jewelery"} />
            <LinkNavBar linkLocation={"electronics"} linkText={"electronics"} />
            <LinkNavBar linkLocation={"men"} linkText={"men"} />
            <LinkNavBar linkLocation={"women"} linkText={"women"} />
          </div>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}
