import React, { useContext, useEffect, useState } from "react";
import { NumberOfProductContext, ProductListContext } from "../../App";
import shoppingCards from "./ShoppingCard.module.css";

export default function ShoppingCard() {
  const [productList, setProductList] = useContext(ProductListContext);
  const [productCount, setProductCount] = useContext(NumberOfProductContext);
  const [finalPrice, setFinalPrice] = useState(0);
  // Calculate all products price
  useEffect(() => {
    let priceTotal = 0;
    for (let i = 0; i < productList.length; i++) {
      priceTotal += productList[i][1];
    }

    setFinalPrice(priceTotal);
  }, [productList]);
  const deleteByIndex = (index) => {
    setProductCount(productCount - productList[index][3]);
    setProductList((oldValues) => {
      return oldValues.filter((_, i) => i !== index);
    });
  };

  function incrementQuantity(index) {
    let newProductArray = productList.slice();
    newProductArray[index][3] += 1;
    newProductArray[index][1] += newProductArray[index][4];

    setProductList(newProductArray);
    setProductCount(productCount + 1);
  }

  function decreaseQuantity(index) {
    if (productList[index][3] === 1) {
      return;
    }

    let newProductArray = productList.slice();
    newProductArray[index][3] -= 1;
    newProductArray[index][1] -= newProductArray[index][4];

    setProductList(newProductArray);
    setProductCount(productCount - 1);
  }

  function buyItems() {
    setProductCount(0);
    setProductList("");
  }

  return (
    <>
      <p>Welcome</p>
      <p>To the</p>
      <p>shopping card</p>
      {productList &&
        productList.map((product, index) => {
          return (
            <div key={productList[index][5]}>
              <p>{product[0]}</p>
              <img key={product[0]} src={product[2]} alt="" />
              <p>{product[1]}</p>
              <div>
                <span
                  className={
                    shoppingCards.deleteProduct + " material-symbols-outlined"
                  }
                  onClick={() => deleteByIndex(index)}
                >
                  delete
                </span>
                <div class="quantity">
                  <button
                    className="minus"
                    aria-label="Decrease"
                    onClick={() => decreaseQuantity(index)}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    className="input-box"
                    value={productList[index][3]}
                  />
                  <button
                    className="plus"
                    aria-label="Increase"
                    onClick={() => incrementQuantity(index)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      <p>Total price: {finalPrice}€</p>
      <button className="buyButton" onClick={buyItems}>
        Buy the items
      </button>
    </>
  );
}
