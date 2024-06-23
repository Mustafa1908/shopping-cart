import { useState, createContext } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import routes from "./Router/router";
import "./index.css";

const router = createBrowserRouter(createRoutesFromElements(routes));

export const ProductListContext = createContext();
export const NumberOfProductContext = createContext();

function App() {
  const [productList, setProductList] = useState("");
  const [productCount, setProductCount] = useState(0);

  return (
    <ProductListContext.Provider value={[productList, setProductList]}>
      <NumberOfProductContext.Provider value={[productCount, setProductCount]}>
        <RouterProvider router={router} />
      </NumberOfProductContext.Provider>
    </ProductListContext.Provider>
  );
}

export default App;
