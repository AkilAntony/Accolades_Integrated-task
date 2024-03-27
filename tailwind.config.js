/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
   
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('https://accoladesintegrated.com/wp-content/uploads/2022/06/Banner-Image.png')",
        'about': "url('https://accoladesintegrated.com/wp-content/uploads/2022/06/About-1.png')",
        'showcase': "url('https://accoladesintegrated.com/wp-content/uploads/2022/06/Layer-4-copy.png')",
        'contact': "url('https://accoladesintegrated.com/wp-content/uploads/2022/07/Acco-Contact-Banner.png')"
      },},
  },
  plugins: [],
}

