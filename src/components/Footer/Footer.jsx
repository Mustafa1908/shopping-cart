import footer from "./Footer.module.css";
import instagram from "../../assets/images/instagram.png";
import youtube from "../../assets/images/youtube.png";
import tiktok from "../../assets/images/tik-tok.png";
import twitter from "../../assets/images/twitter.png";
import facebook from "../../assets/images/facebook.png";

export default function Footer() {
  return (
    <footer className={footer.footer}>
      <section className={footer.memberContainer}>
        <div className={footer.memberTextContainer}>
          <h2 className={footer.memberTextHeader}>BECOME A MEMBER</h2>
          <span className={footer.memberText}>
            Get free shipping, member-only discounts, and exclusive access to
            products when you join.
          </span>
        </div>
        <button className={footer.memberButton} tabIndex="-1">
          Sign up for free
        </button>
      </section>
      <section className={footer.linkContainer}>
        <section className={footer.mainLinkContainer}>
          <section className={footer.pageLinkContainer}>
            <div className={footer.mainLinkSet}>
              <h2 className={footer.mainLinkSetHeader}>COMPANY</h2>
              <span className={footer.mainLinkText}>Our Story</span>
              <span className={footer.mainLinkText}>Shop Locations</span>
              <span className={footer.mainLinkText}>News</span>
              <span className={footer.mainLinkText}>Philanthropy</span>
            </div>
            <div className={footer.mainLinkSet}>
              <h2 className={footer.mainLinkSetHeader}>ACCOUNT</h2>
              <span className={footer.mainLinkText}>My Page</span>
              <span className={footer.mainLinkText}>My products</span>
              <span className={footer.mainLinkText}>Orders</span>
              <span className={footer.mainLinkText}>Wishlist</span>
            </div>
            <div className={footer.mainLinkSet}>
              <h2 className={footer.mainLinkSetHeader}>GET HELP</h2>
              <span className={footer.mainLinkText}>Order Status</span>
              <span className={footer.mainLinkText}>Shipping & Delivery</span>
              <span className={footer.mainLinkText}>Order Cancellation</span>
              <span className={footer.mainLinkText}>Returns</span>
              <span className={footer.mainLinkText}>FAQ</span>
              <span className={footer.mainLinkText}>Contacts us</span>
            </div>
          </section>
          <ul className={footer.iconContainer}>
            <li>
              <img
                src={youtube}
                alt="youtube icon"
                className={footer.socialMediaIcon}
              />
            </li>
            <li>
              <img
                src={instagram}
                alt="instagram icon"
                className={footer.socialMediaIcon}
              />
            </li>
            <li>
              <img
                src={tiktok}
                alt="tiktok icon"
                className={footer.socialMediaIcon}
              />
            </li>
            <li>
              <img
                src={twitter}
                alt="twitter icon"
                className={footer.socialMediaIcon}
              />
            </li>
            <li>
              <img
                src={facebook}
                alt="facebook icon"
                className={footer.socialMediaIcon}
              />
            </li>
          </ul>
        </section>
        <section className={footer.secondaryContainer}>
          <a
            href="https://github.com/Mustafa1908/shopping-cart/tree/main"
            className={footer.pageCreatorLink}
            target="blank"
          >
            Made by Mustafa Özkara
          </a>
          <div className={footer.secondaryLinkContainer}>
            <span className={footer.mainLinkText}>Privacy Policy</span>
            <span className={footer.mainLinkText}>Terms and Conditions</span>
            <span className={footer.mainLinkText}>Accessibility Policy</span>
          </div>
        </section>
      </section>
    </footer>
  );
}
