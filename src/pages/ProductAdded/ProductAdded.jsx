import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ProductAdded() {
  let productArray = useLocation();
  return (
    <>
      <p>Vous venez</p>
      <p>d'ajouter un produit</p>
      <img src={productArray.state.state.image} alt="" />
      <br />
      <Link to={"/shoppingcard"}>Aller au panier</Link>
      <br />
      <Link to={"/jewelery"}>jewelery</Link>
      <br />
      <Link to={"/electronics"}>electronics</Link>
      <br />
      <Link to={"/menclothes"}>men clothes</Link>
      <br />
      <Link to={"/womenclothes"}>women clothes</Link>
    </>
  );
}
