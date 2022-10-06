import "./HeroImgStyles.css";
import BgHeroImage from "../assets/bg-hero-large.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img src={BgHeroImage} alt="HeroImage" className="into-img" />
      </div>
      <div className="content">
        <p>Hi, i'm a student.</p>
        <h1>FullStack Developer.</h1>
        <div>
          <Link to={"/project"} className="btn">
            Projects
          </Link>
          <Link to={"/contact"} className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
