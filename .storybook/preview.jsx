import { GlobalStyle } from "../src/components/Global.style";

export const decorators = [
  (StoryFn) => (
    <>
      <GlobalStyle />
      <StoryFn />
    </>
  ),
];

export const parameters = {
  layout: "fullscreen",
};
