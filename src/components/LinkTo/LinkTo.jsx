import { Link } from "react-router-dom";
import linkTo from "./LinkTo.module.css";
import PropTypes from "prop-types";

export default function LinkTo({ LinkText, LinkPath }) {
  return (
    <Link to={LinkPath} className={linkTo.link}>
      {LinkText}
    </Link>
  );
}

LinkTo.propTypes = {
  LinkText: PropTypes.string.isRequired,
  LinkPath: PropTypes.string.isRequired,
};
