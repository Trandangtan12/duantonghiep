module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}' , './src/*.{js,jsx,ts,tsx}' ,'./public/index.html'],
  darkMode: false, // or 'media' or 'class'
  mode : "jit" ,
  prefix: 'tw-',
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
