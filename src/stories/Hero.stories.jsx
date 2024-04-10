import Hero from "../components/Hero";
import BgImage from "./assets/road.webp";
import BgTravelImage from "./assets/travel-road.webp";
import Heading from "../components/Heading";

export default {
  title: "Hero",
  component: Hero,
};

export const usage = () => (
  <Hero image={BgImage}>
    <h1>Ganhe sua liberdade de ir e vir</h1>
    <p>Lorem ipsum dolor sit.</p>
  </Hero>
);

export const withList = () => (
  <Hero image={BgTravelImage}>
    <Heading>
      <h1>
        Ganhe sua <strong>liberdade</strong>
        <br /> de ir e vir
      </h1>
    </Heading>
    <ul>
      <li>Lorem ipsum dolor sit amet consectetur</li>
      <li>Lorem ipsum dolor sit amet consectetur</li>
      <li>Lorem ipsum dolor sit amet consectetur</li>
    </ul>
  </Hero>
);
