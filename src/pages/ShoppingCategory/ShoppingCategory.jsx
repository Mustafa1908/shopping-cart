import { useState, useEffect } from "react";
import ProductItem from "../../components/ProductItem/ProductItem";
import shop from "./ShoppingCategory.module.css";

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
    <main className={shop.categoryProductContainer}>
      {fullProductArray &&
        fullProductArray.map((product) => {
          return (
            <>
              <ProductItem
                productData={product}
                product={product}
                productDescription={product.description}
                productImage={product.image}
                productTitle={product.title}
                key={product.key}
              />
            </>
          );
        })}
    </main>
  );
}
