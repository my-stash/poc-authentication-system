/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: { backgroundImage: {
      'custom-bg': "url('/src/assets/Bg-image.jpeg')",
    },
  },
},
  plugins: [],
}

