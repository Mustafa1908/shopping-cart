import { Link } from "react-router-dom";
import linkTo from "./LinkTo.module.css";

export default function LinkTo({ LinkText, LinkPath }) {
  return (
    <Link to={LinkPath} className={linkTo.link}>
      {LinkText}
    </Link>
  );
}
