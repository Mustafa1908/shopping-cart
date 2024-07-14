import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import shop from "./ShoppingCategory.module.css";

export default function ShoppingCategory({ productCategory }) {
  const [fullProductArray, setFullProductArray] = useState(null);
  async function createProductsCardsArray() {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${productCategory}`
      );

      if (!response.ok) {
        throw new Error("Could not fetch resource");
      }

      const productData = await response.json();
      let fullProductArrayCopy = [];
      for (let i = 0; i < productData.length; i++) {
        productData[i].key = crypto.randomUUID();
        fullProductArrayCopy.push(productData[i]);
      }

      setFullProductArray(fullProductArrayCopy);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    createProductsCardsArray();
  }, [productCategory]);

  return (
    <main className={shop.categoryProductContainer}>
      {fullProductArray &&
        fullProductArray.map((product) => {
          return (
            <>
              <article>
                <Link
                  to={"/" + productCategory + "/" + product.key}
                  state={product}
                  className={shop.productLink}
                >
                  <div className={shop.productContainer}>
                    <img
                      key={product.description}
                      src={product.image}
                      alt=""
                      className={shop.productImage}
                    />
                    <div className={shop.productDescriptionContainer}>
                      <span className={shop.productText}>{product.title}</span>
                      <span className={shop.productPrice}>
                        ${product.price}
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            </>
          );
        })}
    </main>
  );
}
