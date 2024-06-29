import { Link } from "react-router-dom";
import linkCategory from "./LinkCategory.module.css";

export default function LinkCategory({ linkLocation, linkText }) {
  return (
    <Link to={"/" + linkLocation} className={linkCategory.link}>
      {linkText}
    </Link>
  );
}
