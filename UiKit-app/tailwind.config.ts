import { type Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#121212", // fundo principal
        secondary: "#1E1E1E", // fundo de cards, seções
        text: "#E0E0E0", // texto principal
        textSecondary: "#B3B3B3", // texto secundário
        accent: "#BB86FC", // destaque, botões, links
        success: "#03DAC6", // sucesso / confirmações
        warning: "#CF6679", // alertas / erros
        borderDark: "#2C2C2C", // bordas e separadores
      },
    },
  },
  plugins: [],
};

export default config;
