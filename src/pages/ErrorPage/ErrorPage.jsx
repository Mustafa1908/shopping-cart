import LinkButton from "../../components/LinkButton/LinkButton";
import errorPage from "./ErrorPage.module.css";
import dog from "../../assets/images/dog.jpg";

const ErrorPage = () => {
  return (
    <main className={errorPage.errorPageContainer}>
      <h1>ERROR 404</h1>
      <h2>This is weird</h2>
      <p className={errorPage.mainParagraph}>
        This page doesn't exist or is in construction. Sorry for the
        inconvenience.
      </p>
      <img src={dog} alt="" className={errorPage.errorImage} />
      <span>Try the links below!</span>
      <div className={errorPage.linkToContainer}>
        <LinkButton LinkText={"MAINPAGE"} LinkPath={"/"} />
        <LinkButton LinkText={"JEWELERY"} LinkPath={"/jewelery"} />
        <LinkButton LinkText={"ELECTRONICS"} LinkPath={"/electronics"} />
        <LinkButton LinkText={"MEN"} LinkPath={"/men"} />
        <LinkButton LinkText={"WOMEN"} LinkPath={"/women"} />
      </div>
    </main>
  );
};

export default ErrorPage;
