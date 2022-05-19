const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        MontserratMedium: ["MontserratMedium", ...defaultTheme.fontFamily.sans],
        MontserratRegular: [
          "MontserratRegular",
          ...defaultTheme.fontFamily.sans,
        ],
        MontserratBold: ["MontserratBold", ...defaultTheme.fontFamily.sans],
        MontserratLight: ["MontserratLight", ...defaultTheme.fontFamily.sans],
      },
      // that is animation class
      animation: {
        bounce_fade_out_5s: "bounce_fadeOut_5 5s ease-in-out",
        fadeOut: "fadeOut 1s ease-in-out",
        fadeIn: "fadeIn 1s ease-in-out",
      },

      // that is actual animation
      keyframes: (theme) => ({
        bounce_fadeOut_5: {
          "0%,20%,40%,60%,80%,100%": {
            transform: "translateY(-25%)",
            animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
          },
          "10%,30%,50%,70%,90%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
          },
          "0%": {
            opacity: 0,
          },
          "10%,90%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
            transform: "translateY(-25%)",
            animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
          },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      }),
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        "@font-face": {
          fontFamily: "MontserratLight",
          src: "url(./assets/fonts/Montserrat/static/Montserrat-Light.ttf)",
        },
      });
    }),
    plugin(function ({ addBase }) {
      addBase({
        "@font-face": {
          fontFamily: "MontserratRegular",
          src: "url(./assets/fonts/Montserrat/static/Montserrat-Light.ttf) format('tff')",
        },
      });
    }),
    plugin(function ({ addBase }) {
      addBase({
        "@font-face": {
          fontFamily: "MontserratBold",
          src: "url(./assets/fonts/Montserrat/static/Montserrat-Bold.ttf)",
        },
      });
    }),
    plugin(function ({ addBase }) {
      addBase({
        "@font-face": {
          fontFamily: "MontserratMedium",
          src: "url(./assets/fonts/Montserrat/static/Montserrat-Medium.ttf)",
        },
      });
    }),
  ],
};
