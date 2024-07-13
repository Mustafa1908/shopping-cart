import { Link } from "react-router-dom";
import productItem from "./ProductItem.module.css";

export default function ProductItem({
  productData,
  product,
  productDescription,
  productImage,
  productTitle,
  productCategory,
}) {
  return (
    <>
      <article>
        <Link
          to={"/" + productCategory + "/" + productData.key}
          state={product}
          className={productItem.productLink}
        >
          <div className={productItem.productContainer}>
            <img
              key={productDescription}
              src={productImage}
              alt=""
              className={productItem.productImage}
            />
            <div className={productItem.productDescriptionContainer}>
              <span className={productItem.productText}>{productTitle}</span>
              <span className={productItem.productPrice}>
                ${productData.price}
              </span>
            </div>
          </div>
        </Link>
      </article>
    </>
  );
}
