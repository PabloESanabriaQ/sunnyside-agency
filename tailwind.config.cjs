/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'desktop-header': "url('./src/assets/desktop/image-header.jpg')",
        'mobile-header': "url('./src/assets/mobile/image-header.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      backgroundPosition: {
        'center-center': 'center 40%',
      },
      letterSpacing: {
        'widest': '.15em',
      },
      fontFamily: {
        'barlow': ['Barlow', 'sans-serif'],
        'fraunces': ['Fraunces', 'serif'],
      }
    },
  },
  plugins: [],
}
