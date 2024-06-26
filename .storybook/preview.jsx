import { GlobalStyle } from "../src/components/styles/Global.style";

export const decorators = [
  (StoryFn) => (
    <>
      <GlobalStyle />
      <StoryFn />
    </>
  ),
];

const viewports = {
  extraSmall: {
    name: "Portrait phone (default)",
    styles: {
      width: "360px",
      height: "640px",
    },
  },
  small: {
    name: "Landscape phone (sm)",
    styles: {
      width: "640px",
      height: "360px ",
    },
  },
  medium: {
    name: "Tablet (md)",
    styles: {
      width: "768px",
      height: "1024px ",
    },
  },
  large: {
    name: "Desktop (lg)",
    styles: {
      width: "1024px",
      height: "1366px ",
    },
  },
  extraLarge: {
    name: "Large Desktop (xl)",
    styles: {
      width: "1280px",
      height: "800px ",
    },
  },
};

export const parameters = {
  layout: "fullscreen",
  viewport: {
    viewports,
  },
};
