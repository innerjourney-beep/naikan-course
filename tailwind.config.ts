import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 深い湖パレット
        base: "#FBFAF7",        // 紙のような白（背景）
        paper: "#FFFFFF",        // 純白
        ink: "#2C3E50",          // 本文（深い紺）
        deep: "#1B3A57",         // 見出し（さらに深い藍）
        mist: "#7B9AAE",         // アクセント（霞んだ青灰）
        terracotta: "#E07856",   // CTA（あたたかいテラコッタ）
        terracottaDark: "#C56342", // CTAホバー
        gold: "#B8956A",         // 強調・区切り線（くすんだゴールド）
        soft: "#888888",         // 補足テキスト
        line: "#E8E4DC",         // 細い区切り線
      },
      fontFamily: {
        serif: ['"Noto Serif JP"', "serif"],
        sans: ['"Noto Sans JP"', "sans-serif"],
      },
      letterSpacing: {
        wide: "0.05em",
        wider: "0.1em",
        widest: "0.15em",
      },
      animation: {
        "fade-in": "fadeIn 1.2s ease-out forwards",
        "fade-up": "fadeUp 1s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
