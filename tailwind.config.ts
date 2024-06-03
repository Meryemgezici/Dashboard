import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        DarkBlue: "#1E3B60",
        LightBlue: "#31acd8",
        CustomGray: "#404E65",
        TealishBlue: "#2C5364",
        DarkTeal: "#203A43",
        MidnightBlue: "#0F2027",
        DarkGray: "#1F2937",
        SlateGray: "#4B5563",
        LightGray: "#E5E7EB",
        ProductsBorder: "#eaeaea",
        BasketRed: "#f87171",
        NavyBlue: "#1e3b60",
        LightRed: "#EF4444",
      },
    },
  },
  plugins: [],
};
export default config;
