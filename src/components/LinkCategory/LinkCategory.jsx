import { Link } from "react-router-dom";
import linkCategory from "./LinkCategory.module.css";
import PropTypes from "prop-types";

export default function LinkCategory({ linkLocation, linkText }) {
  return (
    <Link to={"/" + linkLocation} className={linkCategory.link}>
      {linkText}
    </Link>
  );
}

LinkCategory.propTypes = {
  linkLocation: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
};
