import Hero from "../components/Hero";
import BgImage from "./assets/road.webp";
import BgTravelImage from "./assets/travel-road.webp";

export default {
  title: "Hero",
  component: Hero,
};

export const usage = () => (
  <Hero title="Ganhe sau liberdade de ir e vir" image={BgImage}>
    <p>Lorem ipsum dolor sit.</p>
  </Hero>
);

export const withList = () => (
  <Hero title="Ganhe sau liberdade de ir e vir" image={BgTravelImage}>
    <ul>
      <li>Lorem ipsum dolor sit amet consectetur</li>
      <li>Lorem ipsum dolor sit amet consectetur</li>
      <li>Lorem ipsum dolor sit amet consectetur</li>
    </ul>
  </Hero>
);
