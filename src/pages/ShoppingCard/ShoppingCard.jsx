import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NumberOfProductContext, ProductListContext } from "../../App";
import shoppingCard from "./ShoppingCard.module.css";

export default function ShoppingCard() {
  const [productList, setProductList] = useContext(ProductListContext);
  const [productCount, setProductCount] = useContext(NumberOfProductContext);
  const [finalPrice, setFinalPrice] = useState(0);

  // Calculate total price
  useEffect(() => {
    if (productList === "" || productList.length === 0) {
      showMessage("There doesn't seem to be any items in your card...");
    }

    let priceTotal = 0;
    for (let i = 0; i < productList.length; i++) {
      priceTotal += productList[i][1];
    }
    priceTotal = Number(priceTotal.toFixed(2));
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
    newProductArray[index][1] = Number(newProductArray[index][1].toFixed(2));

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

  function buyItem() {
    setProductList("");
    setFinalPrice(0);
    setProductCount(0);
  }

  function showMessage(message) {
    let productContainer = document.querySelector(
      "._productsContainer_9dkno_70"
    );
    let messageParagraph = document.createElement("p");

    messageParagraph.innerText = message;
    productContainer.appendChild(messageParagraph);
  }

  return (
    <main className={shoppingCard.main}>
      <section className={shoppingCard.cardContainer}>
        <h2 className={shoppingCard.shoppingCardHeader}>Your Cart</h2>
        <div className={shoppingCard.cardProductContainer}>
          <div className={shoppingCard.categoryTitleContainer}>
            <span className={shoppingCard.cardFirstTitle}>ITEM</span>
            <span className={shoppingCard.cardTitle}>PRICE</span>
            <span className={shoppingCard.cardTitle}>QUANTITY</span>
            <span className={shoppingCard.finalTitle}>TOTAL</span>
          </div>
          <div className={shoppingCard.lineSeparator}></div>
          <div className={shoppingCard.productsContainer}>
            {productList &&
              productList.map((product, index) => {
                return (
                  <div
                    key={productList[index][0]}
                    className={shoppingCard.productItemContainer}
                  >
                    <div className={shoppingCard.productImageTitleContainer}>
                      <img
                        key={product[0]}
                        src={product[2]}
                        alt=""
                        className={shoppingCard.productImage}
                      />
                      <span className={shoppingCard.productTitle}>
                        {product[0]}
                      </span>
                    </div>
                    <span className={shoppingCard.productPrice}>
                      ${product[4]}
                    </span>
                    <div className={shoppingCard.quantityContainer}>
                      <div className={shoppingCard.modifyQuantityContainer}>
                        <button
                          className={shoppingCard.buttonModifyQuantity}
                          aria-label="Decrease"
                          onClick={() => decreaseQuantity(index)}
                        >
                          -
                        </button>
                        <input
                          type="number"
                          className={shoppingCard.inputQuantity}
                          disabled
                          value={productList[index][3]}
                        />
                        <button
                          className={shoppingCard.buttonModifyQuantity}
                          aria-label="Increase"
                          onClick={() => incrementQuantity(index)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className={shoppingCard.totalRemoveContainer}>
                      <span className={shoppingCard.productFinalPrice}>
                        ${product[1]}
                      </span>
                      <button
                        className={shoppingCard.removeButton}
                        onClick={() => deleteByIndex(index)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className={shoppingCard.lineSeparator}></div>
        <div className={shoppingCard.buyContainer}>
          <div className={shoppingCard.totalPriceContainer}>
            <span className={shoppingCard.finalPriceText}>
              Subtotal ${finalPrice}
            </span>
            <span className={shoppingCard.shippingText}>
              Shipping and taxes computed at checkout
            </span>
            <div className={shoppingCard.lineSeparator}></div>
          </div>
          <button
            className={shoppingCard.checkoutButton}
            onClick={() => buyItem()}
          >
            CHECKOUT
          </button>
          <Link to={"/electronics"} className={shoppingCard.keepShoppingText}>
            Keep shopping
          </Link>
        </div>
      </section>
    </main>
  );
}
