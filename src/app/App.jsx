import { useState, createContext } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import routes from "./router.jsx";
import "./index.css";
import Footer from "../components/Footer/Footer";

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
        <Footer />
      </NumberOfProductContext.Provider>
    </ProductListContext.Provider>
  );
}

export default App;
