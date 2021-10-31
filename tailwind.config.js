module.exports = {
    purge: ['./src/_includes/**/*.{html,njk,md}'],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
      fontFamily: {
        'sans': ['sans-serif', 'ui-sans-serif', 'system-ui'],
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1792px',
        '4xl': '2048px',
        '5xl': '2304px',
        '6xl': '2560px',
      },
      extend: {
        textColor: {
          'current': '#FF0000',
          'primary': '#00022e'
        },
        colors: {
          accent: 'green',
          'cms-gray': 'rgb(239, 240, 244)',
        },
        width: {
          '2-cards-in-row': '46%',
          '4-cards-in-row': '23%',
        },
        scale: {
          '103': '1.03',
          '105': '1.05',
          '110': '1.10',
        },
        margin: {
          '1/4': '25%',
          '-1/4': '-25%',
          '1/5': '20%',
          '-1/5': '-20%',
          '1/8': '12.5%',
          '-1/8': '-12.5%',
        }
      },
    },
    variants: {
      extend: {
        display: ['hover', 'group-hover'],
        borderWidth: ['focus'],
        fontWeight: ['hover', 'group-hover'],
        padding: ['first',],
        paddingTop: ['first',],
        paddingRight: ['first',],
        paddingBottom: ['first',],
        paddingLeft: ['first',],
      },
    },
    plugins: [],
  }