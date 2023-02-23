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
        'desktop-photography': "url('./src/assets/desktop/image-photography.jpg')",
        'mobile-photography': "url('./src/assets/mobile/image-photography.jpg')",
        'desktop-graphic-design': "url('./src/assets/desktop/image-graphic-design.jpg')",
        'mobile-graphic-design': "url('./src/assets/mobile/image-graphic-design.jpg')",
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
