import PropTypes from "prop-types";
import { Root, Content, Container } from "./styles/Hero.styles";

const Hero = ({ image, children }) => (
  <Root image={image}>
    <Container>
      <Content>{children}</Content>
    </Container>
  </Root>
);

Hero.propTypes = {
  image: PropTypes.string,
  children: PropTypes.node,
};

export default Hero;
