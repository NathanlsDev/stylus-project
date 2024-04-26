import { text } from "@storybook/addon-knobs"

import Hero from "./Hero";
import BgImage from "../stories/assets/road.webp";
import BgTravelImage from "../stories/assets/travel-road.webp";
import Heading from "./Heading";

export default {
  title: "Components | Hero",
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
      <h1>{text('Title', 'Ganhe sua liberdade de ir e vir')}
        
      </h1>
    </Heading>
    <ul>
      <li>Lorem ipsum dolor sit amet consectetur</li>
      <li>Lorem ipsum dolor sit amet consectetur</li>
      <li>Lorem ipsum dolor sit amet consectetur</li>
    </ul>
  </Hero>
);
