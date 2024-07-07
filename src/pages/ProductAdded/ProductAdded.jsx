import { useLocation, Link } from "react-router-dom";
import productAdded from "./ProductAdded.module.css";
import { ProductListContext } from "../../App";
import { useContext } from "react";

export default function ProductAdded() {
  let productArray = useLocation();
  return (
    <main className={productAdded.main}>
      <div className={productAdded.productAddedContainer}>
        <img
          src={productArray.state.state.image}
          alt=""
          className={productAdded.productImage}
        />
        <div className={productAdded.addedContainer}>
          <span className={productAdded.checkMark}>&#10003;</span>
          <span>Added to the cart</span>
        </div>
      </div>
      <div className={productAdded.leaveContainer}>
        <Link
          to={productArray.pathname + "/shoppingcard"}
          className={productAdded.checkoutButton}
        >
          Checkout
        </Link>
        <Link to={"/jewelery"} className={productAdded.continueShoppingButton}>
          Continue Shopping
        </Link>
      </div>
    </main>
  );
}
