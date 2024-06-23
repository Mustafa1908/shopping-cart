import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import shop from "./Shop.module.css";

export default function ShoppingCategory({ categoryText, productCategory }) {
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
    <div>
      <p>{categoryText}</p>
      <p>ozkara</p>
      <h1>hey</h1>
      {fullProductArray &&
        fullProductArray.map((product) => {
          return (
            <div key={product.description}>
              <p>{product.description}</p>
              <Link to={"/shop/" + product.key} state={product}>
                <img
                  key={product.description}
                  src={product.image}
                  alt=""
                  className={shop.img}
                />
              </Link>
              <p>{product.price}€</p>
            </div>
          );
        })}
    </div>
  );
}
