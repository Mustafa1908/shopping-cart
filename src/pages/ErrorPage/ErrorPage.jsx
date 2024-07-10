import { Link } from "react-router-dom";
import LinkTo from "../../components/LinkTo/LinkTo";
import errorPage from "./ErrorPage.module.css";

const ErrorPage = () => {
  return (
    <div className={errorPage.errorPageContainer}>
      <h1>ERROR 404</h1>
      <h2>This is weird</h2>
      <p className={errorPage.mainParagraph}>
        This page doesn't exist or is in construction. Sorry for the
        inconvenience.
      </p>
      <span>Try the links below!</span>
      <div className={errorPage.linkToContainer}>
        <LinkTo LinkText={"MAINPAGE"} LinkPath={"/"} />
        <LinkTo LinkText={"JEWELERY"} LinkPath={"/jewelery"} />
        <LinkTo LinkText={"ELECTRONICS"} LinkPath={"/electronics"} />
        <LinkTo LinkText={"MEN"} LinkPath={"/men"} />
        <LinkTo LinkText={"WOMEN"} LinkPath={"/women"} />
      </div>
    </div>
  );
};

export default ErrorPage;
