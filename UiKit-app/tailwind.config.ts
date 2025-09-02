import { type Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#121212",
        secondary: "#1E1E1E",
        text: "#E0E0E0",
        textSecondary: "#B3B3B3",
        accent: "#BB86FC",
        success: "#03DAC6",
        warning: "#CF6679",
        borderDark: "#2C2C2C",
      },
    },
  },
  plugins: [],
};

export default config;
