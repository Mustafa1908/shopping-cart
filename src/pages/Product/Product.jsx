import { useContext, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { ProductListContext, NumberOfProductContext } from "../../App";
import product from "./Product.module.css";

export default function Product() {
  const [productList, setProductList] = useContext(ProductListContext);
  const [productCount, setProductCount] = useContext(NumberOfProductContext);
  const [productQuantity, setProductQuantity] = useState(1);
  let productArray = useLocation();

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
    <div key={productArray.key} className={product.productContainer}>
      <div className={product.productImageContainer}>
        <img
          src={productArray.state.image}
          alt=""
          className={product.productImage}
        />
      </div>
      <div className={product.productInformationContainer}>
        <div className={product.productMainInformationContainer}>
          <h2 className={product.productHeader}>{productArray.state.title}</h2>
          <span className={product.productPrice}>
            ${productArray.state.price}
          </span>
          <div className={product.productLine}></div>
        </div>
        <p className={product.productDescription}>
          {productArray.state.description}
        </p>
        <div className={product.quantityContainer}>
          <span className={product.productDescription}>QUANTITY:</span>
          <div className={product.addProductContainer}>
            <button
              className={product.changeValueButton}
              aria-label="Decrease"
              onClick={decreaseQuantity}
            >
              -
            </button>
            <input
              type="number"
              className={product.inputQuantity}
              value={productQuantity}
            />
            <button
              className={product.changeValueButton}
              aria-label="Increase"
              onClick={incrementQuantity}
            >
              +
            </button>
          </div>
        </div>
        <Link
          to={
            "/" +
            productArray.state.category +
            "/" +
            productArray.state.key +
            "/productadded"
          }
          state={productArray}
          className={product.addButtonContainer}
        >
          <button className={product.addProductButton} onClick={addProduct}>
            Add to cart
          </button>
        </Link>
      </div>
    </div>
  );
}
