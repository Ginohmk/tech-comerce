/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        gray: {
          900: '#191C1F',
          800: '#303639',
          700: '#475156',
          600: '#5F6C72',
          500: '#77878F',
        },
        primary: {
          900: '#331B0A',
          800: '#663514',
          700: '#99501F',
          600: '#DE732D',
          500: '#FA8232',
        },
        secondary: {
          900: '#092131',
          800: '#124261',
          700: '#1B6392',
          600: '#2484C2',
          500: '#2DA5F3',
        },
        success: {
          900: '#092407',
          800: '#12470E',
          700: '#1B6B16',
          600: '#248E1D',
          500: '#2DB224',
        },
        warning: {
          900: '#2F2802',
          800: '#5E5005',
          700: '#8D7807',
          600: '#BCA00A',
          500: '#EBC80C',
          300: '#F3DE6D',
        },
        danger: {
          900: '#301212',
          800: '#5F2323',
          700: '#8F3535',
          600: '#BE4646',
          500: '#EE5858',
        },
        white: '#FFFFFF',
      },
      colors: {
        warning: {
          600: '#BCA00A',
          500: '#EBC80C',
        },
        gray: {
          900: '#191C1F',
          800: '#303639',
        },
        primary: {
          500: '#FA8232',
        },
        secondary: {
          800: '#124261',
          700: '#1B6392',
        },
      },
      border: {
        gray: {
          800: '#303639',
        },
      },
    },
  },

  plugins: [],
};
