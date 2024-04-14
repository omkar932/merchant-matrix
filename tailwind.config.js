const { join } = require("path");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      "{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}"
    ),
    "./libs/**/*.{tsx,ts,html}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        negative: "var(--color-negative)",
        positive: "var(--color-positive)",
        "primary-background": "var(--background-primary)",
        "sec-background": "var(--background-sec)",
        "text-primary": "var(--color-text-primary)",
        "button-text-primary": "var(--button-text-primary)",
        "border-primary": "var(--border-primary)",
        "background-disable": "var(--background-disable)",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      spacing: {
        "15px": "15px",
        "25px": "25px",
        4.5: "18px",
        6.5: "26px",
      },
      lineHeight: {
        3.5: "14px",
      },
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
    }),
  },
  variants: {
    backgroundColor: ["active"],
  },
  plugins: [],
};
