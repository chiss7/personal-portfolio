import "./FooterStyles.css";
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Comité del pueblo</p>
              <p>Quito - Ecuador</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              0984579843
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              cristru8@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About the company</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Dignissimos est at exercitationem voluptatibus repellat. Temporibus
            quaerat ut saepe quia esse magnam cum minima facere ab voluptatibus
            atque, delectus vitae nesciunt.
          </p>
          <div className="social">
            <FaFacebook size={20} style={{ color: "#fff", marginRight: "1rem" }} />
            <FaTwitter size={20} style={{ color: "#fff", marginRight: "1rem" }} />
            <FaLinkedin size={20} style={{ color: "#fff", marginRight: "1rem" }} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
