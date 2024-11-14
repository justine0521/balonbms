/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dancing': ['Dancing Script', 'cursive'],
      },
      
      colors: {
        "darkGreen": "#2c6e49",
        "whiteBg": "#edf2f4",
        "white": "#ffffff",
        "lightGreen": "#d8f3dc",
        "greyBg": "#e9ecef",
        "randomBg": "#fbfbf2",
        
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#570df8",
          "secondary": "#f000b8",
          "accent": "#37cdbe",
          "neutral": "#3d4451",
          "base-100": "#ffffff",
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
      },
      "light",
    ],
  },
}



