/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "neutral-50": "#F9F9F9",
        "neutral-100": "#F4F4F4",
        "neutral-200": "#E4E4E4",
        "neutral-300": "#D3D3D3",
        "neutral-400": "#A2A2A2",
        "neutral-500": "#737373",
        "neutral-600": "#525252",
        "neutral-700": "#404040",
        "neutral-800": "#262626",
        "neutral-900": "#171717",
        "neutral-950": "#0A0A0A",
        "neutral-1000": "#000000",
        "stroke": "#546A7A",
        "blue-default": "#1D9BF0",
        "blue-hover": "#1871CA",
        "blue-disabled": "#1E5D87",
        "searchbar-fill": "#212327",
        "secondary": "rgba(255,255,255,0.6)",
        "success": "#00BE74",
        "error": "#8B141A"
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        chirp: ["Chirp", "sans-serif"],
      },
      fontSize: {
        "2.5xl": "1.625rem",
        "sm-2": "0.94rem",
      },
      spacing: {
        25: "6.25rem",
        84: "20.88rem",
        108: "27.63rem",
        106: "26.63rem",
        87: "21.75rem",
        128: "32rem",
        88: "22.19rem",
        120: "30.13rem",
        35: "8.94rem",
        149: "37.38rem",
        125:  "31.38rem"
      },
      borderRadius: {
        "4.06": "4.06rem",
        "1.88": "1.88rem",
        "625": "625rem"
      },
      boxShadow: {
        "sh-1" : "0px 8px 16px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
}
