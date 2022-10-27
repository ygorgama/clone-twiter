/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontSize: {
      xls: "13px",
      xs: "15px",
      sm: "16px",
      md: "19px",
      lg: "20px",
      xlg: "21px",
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
      },

      "primary-blue": "#1DA1F2",
      white: "#FFFFFF",
    },
    extend: {
      width: {
        profile: "20%",
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
