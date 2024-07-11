import mainPage from "./MainPage.module.css";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <main className={mainPage.main}>
      <div className={mainPage.imageContainer}>
        <div className={mainPage.imageTextContainer}>
          <p className={mainPage.imageText}>DISCOVER OUR NEW TRENDY PRODUCTS</p>
          <Link to={"./jewelery"} className={mainPage.imageLink}>
            SHOP NOW
          </Link>
        </div>
      </div>
    </main>
  );
}
