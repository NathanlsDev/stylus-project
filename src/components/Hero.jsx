import { Root, Title, Content } from "./Hero.styles";

const Hero = ({ image, title, children }) => (
  <Root image={image}>
    <section>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </section>
  </Root>
);

export default Hero;
