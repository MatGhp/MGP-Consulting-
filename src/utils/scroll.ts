// In-page scrolling for navigation links and buttons.
// The offset for the fixed navbar comes from `scroll-padding-top` in index.css, and the animation follows the
// CSS `scroll-behavior`, which is switched off for visitors who prefer reduced motion. Passing no `behavior`
// here keeps both in one place.

export const scrollToSection = (selector: string): void => {
  document.querySelector(selector)?.scrollIntoView({ block: "start" });
};

export const scrollToTop = (): void => {
  window.scrollTo({ top: 0 });
};
