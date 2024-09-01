import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary1": "#F7F6FE",
        "secondary1": "#E0E0E0",
        "secondary2": "#9E9E9E",
        "accent1": "#624DE3",
        "darkprimary1": "#1D1E42",
        "deliveredBg": "#EBF9F1",
        "deliveredText": "#1F9254",
        "processBg": "#FEF2E5",
        "processText": "#CD6200",
        "canceledBg": "#FBE7E8",
        "canceledText": "#A30D11"  
      },
    },
  },
  plugins: [],
};

// module.exports = {
//   darkMode: 'class',
// }

export default config;
