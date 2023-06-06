/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
   daisyui: {
      themes: [
        {
          mytheme: {
          
                  "primary": "#FF9800",
                  "secondary": "#FFC107",
                  "accent": "#0d9488",
                  "neutral": "#221551",
                  "base-100": "#1a103c",
                  "info": "#53c0f3",
                  "success": "#71ead2",
                  "warning": "#f3cc30",
                  "error": "#e24056",
          },
        },
      ],
    },
  plugins: [require("daisyui")],
}

