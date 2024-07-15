import { Link } from "react-router-dom";
import linkCategory from "./LinkNavBar.module.css";
import PropTypes from "prop-types";

export default function LinkNavBar({ linkLocation, linkText }) {
  return (
    <Link to={"/" + linkLocation} className={linkCategory.link}>
      {linkText}
    </Link>
  );
}

LinkNavBar.propTypes = {
  linkLocation: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
};
