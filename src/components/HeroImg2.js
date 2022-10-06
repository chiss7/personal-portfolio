import "./HeroImg2Styles.css";

const HeroImg2 = ({ heading, text, img }) => {
  return (
    <div className="hero-img">
      <img src={img} alt="BgHeroImage2" className="into-img2" />
      <div className="heading">
        <h1>{heading}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default HeroImg2;
