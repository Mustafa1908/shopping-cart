import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { ProductListContext, NumberOfProductContext } from "../../App";
import item from "./Product.module.css";

export default function Product() {
  const [productList, setProductList] = useContext(ProductListContext);
  const [productCount, setProductCount] = useContext(NumberOfProductContext);
  const [productQuantity, setProductQuantity] = useState(1);
  let productArray = useLocation();
  console.log(productArray);

  function addProduct() {
    let newProductArray = [
      productArray.state.title,
      productArray.state.price * productQuantity,
      productArray.state.image,
      productQuantity,
      productArray.state.price,
    ];

    for (let i = 0; i < productList.length; i++) {
      if (productList[i][0] === productArray.state.title) {
        let productArrayCopy = productList.slice();
        productArrayCopy[i][3] += productQuantity;
        productArrayCopy[i][1] += productQuantity * productArrayCopy[i][4];
        setProductList(productArrayCopy);
        setProductCount(productCount + productQuantity);
        return;
      }
    }

    setProductList((productList) => [...productList, newProductArray]);
    setProductCount(productCount + productQuantity);
  }

  function incrementQuantity() {
    setProductQuantity(productQuantity + 1);
  }

  function decreaseQuantity() {
    if (productQuantity === 1) {
      return;
    } else {
      setProductQuantity(productQuantity - 1);
    }
  }

  return (
    <div key={productArray.key}>
      <p>{productArray.state.title}</p>
      <p>{productArray.state.price}€</p>
      <img src={productArray.state.image} alt="" />
      <p>{productArray.state.description}</p>
      <Link
        to={"/shop/" + productArray.state.key + "/productadded"}
        state={productArray}
      >
        <button
          className={item.addProductButton + " addProductButton"}
          onClick={addProduct}
        >
          Add
        </button>
      </Link>
      ;
      <div className="quantity">
        <button
          className="minus"
          aria-label="Decrease"
          onClick={decreaseQuantity}
        >
          -
        </button>
        <input type="number" className="input-box" value={productQuantity} />
        <button
          className="plus"
          aria-label="Increase"
          onClick={incrementQuantity}
        >
          +
        </button>
      </div>
    </div>
  );
}
