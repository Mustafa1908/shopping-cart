import MainPage from "../pages/MainPage/MainPage.jsx";
import ShoppingCategory from "../pages/ShoppingCategory/ShoppingCategory.jsx";
import Header from "../pages/Header/Header.jsx";
import Product from "../pages/Product/Product.jsx";
import ProductAdded from "../pages/ProductAdded/ProductAdded.jsx";
import ShoppingCard from "../pages/ShoppingCard/ShoppingCard.jsx";
import ErrorPage from "../pages/ErrorPage/ErrorPage.jsx";
import { Route } from "react-router-dom";

const routes = (
  <Route path="/" element={<Header />} errorElement={<ErrorPage />}>
    <Route index element={<MainPage />} />
    <Route
      path="jewelery"
      element={<ShoppingCategory productCategory={"jewelery"} />}
    />
    <Route
      path="electronics"
      element={<ShoppingCategory productCategory={"electronics"} />}
    />
    <Route
      path="men"
      element={<ShoppingCategory productCategory={"men's clothing"} />}
    />
    <Route
      path="women"
      element={<ShoppingCategory productCategory={"women's clothing"} />}
    />
    <Route path="/:categoryName/:id" element={<Product />} />
    <Route path="/:categoryName/:id/productadded" element={<ProductAdded />} />
    <Route
      path="/:categoryName/:id/productadded/shoppingcard"
      element={<ShoppingCard />}
    />
    <Route path="shoppingcard" element={<ShoppingCard />} />
  </Route>
);

export default routes;
