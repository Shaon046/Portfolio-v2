/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
   
      // Or if using `src` directory:
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
       
        boxShadow: {
          'glow': '0 0px 30px  rgb(250 235 215)',
        },

        colors: {
          'primary-yellow': '#FBE094',
          "primary-blue":"#162936",
          "primary-red":"#FA2256",
          "primary-light":"#faebd7",
          "primary-green":"#00d646"

        },

      },
    },
    plugins: [],
  }