/* eslint-disable @typescript-eslint/no-empty-function */
declare global {
  interface Window {
    __theme: string;
    __onThemeChange: (theme: string) => void;
    __setPreferredTheme: (theme: string) => void;
  }
}

const code = function () {
  window.__onThemeChange = function () {};

  function setTheme(newTheme: string) {
    document.documentElement.classList.remove(window.__theme);
    window.__theme = newTheme;
    preferredTheme = newTheme;
    document.documentElement.dataset.theme = newTheme;
    window.__onThemeChange(newTheme);
    document.documentElement.classList.add(newTheme);
  }

  let preferredTheme;

  try {
    preferredTheme = localStorage.getItem("theme");
  } catch (e) {
    console.log(e);
  }

  window.__setPreferredTheme = function (newTheme) {
    setTheme(newTheme);
    try {
      localStorage.setItem("theme", newTheme);
    } catch (e) {
      console.log(e);
    }
  };

  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  darkQuery.addEventListener("change", function (e) {
    window.__setPreferredTheme(e.matches ? "dark" : "light");
  });

  setTheme(preferredTheme || (darkQuery.matches ? "dark" : "light"));
};

export const getTheme = `(${code})();`;
