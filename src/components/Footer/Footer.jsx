import footer from "./Footer.module.css";
import instagram from "../../assets/images/instagram.png";
import youtube from "../../assets/images/youtube.png";
import tiktok from "../../assets/images/tik-tok.png";
import twitter from "../../assets/images/twitter.png";
import facebook from "../../assets/images/facebook.png";

export default function Footer() {
  return (
    <footer className={footer.footer}>
      <div className={footer.memberContainer}>
        <div className={footer.memberTextContainer}>
          <h3 className={footer.memberTextHeader}>BECOME A MEMBER</h3>
          <span className={footer.memberText}>
            Get free shipping, member-only discounts, and exclusive access to
            products when you join.
          </span>
        </div>
        <button className={footer.memberButton}>Sign up for free</button>
      </div>
      <div className={footer.linkContainer}>
        <div className={footer.mainLinkContainer}>
          <div className={footer.pageLinkContainer}>
            <div className={footer.mainLinkSet}>
              <h3 className={footer.mainLinkSetHeader}>COMPANY</h3>
              <span className={footer.mainLinkText}>Our Story</span>
              <span className={footer.mainLinkText}>Shop Locations</span>
              <span className={footer.mainLinkText}>News</span>
              <span className={footer.mainLinkText}>Philanthropy</span>
            </div>
            <div className={footer.mainLinkSet}>
              <h3 className={footer.mainLinkSetHeader}>ACCOUNT</h3>
              <span className={footer.mainLinkText}>My Page</span>
              <span className={footer.mainLinkText}>My products</span>
              <span className={footer.mainLinkText}>Orders</span>
              <span className={footer.mainLinkText}>Wishlist</span>
            </div>
            <div className={footer.mainLinkSet}>
              <h3 className={footer.mainLinkSetHeader}>GET HELP</h3>
              <span className={footer.mainLinkText}>Order Status</span>
              <span className={footer.mainLinkText}>Shipping & Delivery</span>
              <span className={footer.mainLinkText}>Order Cancellation</span>
              <span className={footer.mainLinkText}>Returns</span>
              <span className={footer.mainLinkText}>FAQ</span>
              <span className={footer.mainLinkText}>Contacts us</span>
            </div>
          </div>
          <div className={footer.iconContainer}>
            <img
              src={instagram}
              alt="instagram icon"
              className={footer.socialMediaIcon}
            />
            <img
              src={youtube}
              alt="youtube icon"
              className={footer.socialMediaIcon}
            />
            <img
              src={tiktok}
              alt="tiktok icon"
              className={footer.socialMediaIcon}
            />
            <img
              src={twitter}
              alt="twitter icon"
              className={footer.socialMediaIcon}
            />
            <img
              src={facebook}
              alt="facebook icon"
              className={footer.socialMediaIcon}
            />
          </div>
        </div>
        <div className={footer.secondaryContainer}>
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
        </div>
      </div>
    </footer>
  );
}
