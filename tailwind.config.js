/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        base: ['1rem'],
        xsmall: ['1.5rem'],
        small: ['2rem'],
        medium: ['3rem'],
        large: ['4rem'],
        xlarge: ['5rem'],
        xxlarge: ['6rem'],
      },
      screens: {
        xxs: '300px',
        xs: '400px',
        sm: '480px',
        smaller: '600px',
        md: '768px',
        tb: '992px',
        lg: '1024px',
        xl: '1200px',
        xxl: '1440px',
        xxxl: '1680px',
      },
      colors: {
        'light': '#1fb6ff',
        'light-100': 'darkcyan',
        'dark': '#181818',
        'dark-100': 'rgba(0, 0, 0, 0.3)',
        'dark-200': 'rgba(0, 0, 0, 0.5)',
        'dark-300': 'rgba(0, 0, 0, 0.7)',
      },
      spacing: {
        'unset': 'unset',
        's1': '45vh',
        's2': '50vh',
        's3': '65vh',
        's4': '5vw',
        's5': '1600px',
        's6': '85%',
        's7': '10px',
        's8': '15px',
        's9': '30px',
        's10': '1rem',
        's11': '1.2rem',
        's12' : '1.5rem',
        's13' : '2rem',
        's14' : '3rem',
        's15' : '4rem',
        's16' : '70px',
        's17' : '75vh',
        's18' : '25vh',
        's19' : '35vh',
        's20' : '100px',
      },
      fontFamily : {
        Poppins : ["Poppins", "sans-serif"]
      },
      backgroundPosition: {
        'pos-1' : '0% 20%',
        'pos-2' : '0% 60%',
      },
      boxShadow: {
        '3xl' : 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
      },
      flex: {
        '1.5': '1.5 1 0%',
        '2': '2 1 0%'
      }
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.text-shadow': {
          'text-shadow': '1px 1px 2px #ccc, 0 0 1em #000, 0 0 0.2em #000',
        },
        '.primary-heading': {
          fontSize: '2rem',
          fontWeight: '600',
          '@media screen and (min-width:1200px)' : {
            fontSize: '3rem',
          }
        },
        '.primary-subheading': {
          fontSize: '1rem',
          fontWeight: 'bold',
          lineHeight: '1',
          marginBottom: '8px',
          '@media screen and (min-width:1200px)' : {
            fontSize: '1.5rem',
          }
        },
        '.primary-text': {
          fontSize: '1rem',
          '@media screen and (min-width:1200px)' : {
            fontSize: '1.2rem',
          }
        },
        '.primary-btn': {
          width: 'max-content',
          fontSize: '1rem',
          padding: '6px 15px',
          border: '1px solid #181818',

          '&:hover': {
            backgroundColor: 'darkcyan',
            color: '#fff',
          },

          '@media screen and (min-width:1200px)' : {
            fontSize: '1.3rem',
          }
        },
        '.container-large': {
          padding: '0px 10px',

          '@media screen and (min-width:768px)' : {
            maxWidth: '85%',
            margin: 'auto',
          },

          '@media screen and (min-width:1680px)' : {
            maxWidth: '1600px',
          }
        },
        '.mobile-view': {
          '@media screen and (min-width:768px)' : {
            display: 'none',
          }
        },
        '.desktop-view': {
          display: 'none',
          '@media screen and (min-width:768px)' : {
            display: 'block',
          }
        },
        '.card-button': {
          fontSize: '1rem',
          width: '123px',
          color: 'darkcyan',
          borderColor: 'darkcyan',

          '&:hover': {
            borderColor: '#181818',
          },


          '@media screen and (min-width: 2000px)' : {
            fontSize: '1.1rem',
            width: '140px',
          }
        },
        '.category-button': {
          fontSize: '1rem',
          padding: '6px 15px',
          borderRadius: '10px',
          boxShadow: 'rgba(0, 0, 0, 0.16) 5px 2px 10px',

          '&:hover': {
            backgroundColor: 'darkcyan',
            color: '#fff',
          },

          '@media screen and (min-width: 1024px)' : {
            fontSize: '1.1rem',
            letterSpacing: '1px',
            width: '180px',
          },

          '@media screen and (min-width: 2000px)' : {
            fontSize: '1.5rem',
            width: '250px',
          }
        },
        '.selectedBtn': {
          backgroundColor: "darkcyan",
          color: "#fff",
        }
      }) 
    })
  ]
}