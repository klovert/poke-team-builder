/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        pokeball: '#EE1515',
        pokenav: '#323232',
        pokebg: '#F6F8FF',
      },
      fontFamily: {
        pokedf: ['"Press Start 2P"', 'cursive'], 
      },
    },
  },
  plugins: [],
}

