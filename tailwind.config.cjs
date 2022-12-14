/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontSize: {
      xls: "13px",
      xss: "14px",
      xs: "15px",
      sm: "16px",
      md: "19px",
      lg: "20px",
      xlg: "21px",
      login: "42px",
      "login-input": "18px",
    },
    colors: {
      black: "#0F1419",
      dark: {
        1: "#17202A",
        2: "#1C2733",
        3: "#283340",
        4: "#3A444C",
        5: "#5B7083",
        6: "#8899A6",
        7: "#EBEEF0",
        8: "#F7F9FA",
        bacdrop: " rgba(0, 0, 0, 0.75)",
      },
      transparente: "transparent",
      "primary-blue": "#1DA1F2",
      white: "#FFFFFF",
    },

    extend: {
      width: {
        profile: "20%",
        90: "22rem",
        100: "30rem",
      },

      top: {
        "15vh": "15vh",
      },
      height: {
        100: "30rem",
      },
      borderWidth: {
        1: "1px",
      },
      fontFamily: {
        sans: "Nunito, sans-serif",
      },
      height: {
        100: "30rem",
      },
    },
  },
  plugins: [],
};
