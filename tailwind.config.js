/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
"arcane": "url('/Images/image.jpg')",
"tech": "url('/tech.png')",
      },
      animation: {
        'anim': ' flow  3s ease  infinite',
        'waving': ' wave 3s linear infinite ',
        'grad': 'wavey 5s ease infinite',
        
        
      },
      keyframes: {

        flow: {
          '0%': {
            'opacity': '0',
            'transform': 'rotate(45deg) ',
            
            
          },
          '50%': {
            'opacity': '1',
          },
          '100%': {
            'opacity': '0',
            'transform': 'rotate(45deg)',
            
          },
          
        },
        wave: {
          '0%': {transform: 'rotate(0.0deg)',},
          '10%': {transform: 'rotate(14.0deg)',},
          '20%': {transform: 'rotate(-8.0deg)',},
          '30%': {transform: 'rotate(14.0deg)',},
          '40%': {transform: 'rotate(4.0deg)',},
          '50%': {transform: 'rotate(10.0deg)',},
          '60%': {transform: 'rotate(0.0deg)',},
          '100%': {transform: 'rotate(0.0deg)',},
       
          
        },
        wavey: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        
      },
      fontFamily: {
        'poppins': ['sans-serif'],
      },
      
    },
  },
  plugins: [ require("tailwindcss-animation-delay"),],
}
