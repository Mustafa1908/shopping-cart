import { Link } from "react-router-dom";
import linkTo from "./LinkButton.module.css";
import PropTypes from "prop-types";

export default function LinkButton({ LinkText, LinkPath }) {
  return (
    <Link to={LinkPath} className={linkTo.link}>
      {LinkText}
    </Link>
  );
}

LinkButton.propTypes = {
  LinkText: PropTypes.string.isRequired,
  LinkPath: PropTypes.string.isRequired,
};
