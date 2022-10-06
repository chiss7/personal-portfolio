import HeroImg2 from "../components/HeroImg2";
import BgAbout from '../assets/bg-about-large.jpg'

export const About = () => {
  return (
    <div>
      <HeroImg2 heading="ABOUT." text="I'm a friendly FullStack Developer" img={BgAbout} />
    </div>
  );
};
