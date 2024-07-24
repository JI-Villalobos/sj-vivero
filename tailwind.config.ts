import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'mp-green': '#0A6B2B',
      'mp-light-green': '#55B13E',
      'mp-blue': '#007EC2',
      'mp-dark': '#2F2E41',
      'mp-gray-soft': '#F3F0F0',
      'mp-error': '#EF4444',
      'mp-soft-red': '#FEF2F2',
      'mp-strong-red': '#991B1B',
      'mp-strong-gray': '#DDDDDD',
      'mp-soft-dark': '#5B596A',
      'mp-white': '#F8FAFC'
    },
    fontFamily: {
      coda: ['Coda', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
