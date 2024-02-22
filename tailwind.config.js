/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'tw-gray[900]': '#191C1F',
        'tw-gray[800]': '#303639',
        'tw-gray[700]': '#475156',
        'tw-gray[600]': '#5F6C72',
        'tw-gray[500]': '#77878F',

        'tw-primary[900]': '#331B0A',
        'tw-primary[800]': '#663514',
        'tw-primary[700]': '#99501F',
        'tw-primary[600]': '#DE732D',
        'tw-primary[500]': '#FA8232',

        'tw-secondary[900]': '#092131',
        'tw-secondary[800]': '#124261',
        'tw-secondary[700]': '#1B6392',
        'tw-secondary[600]': '#2484C2',
        'tw-secondary[500]': '#2DA5F3',

        'tw-success[900]': '#092407',
        'tw-success[800]': '#12470E',
        'tw-success[700]': '#1B6B16',
        'tw-success[600]': '#248E1D',
        'tw-success[500]': '#2DB224',

        'tw-warning[900]': '#2F2802',
        'tw-warning[800]': '#5E5005',
        'tw-warning[700]': '#8D7807',
        'tw-warning[600]': '#BCA00A',
        'tw-warning[500]': '#EBC80C',

        'tw-danger[900]': '#301212',
        'tw-danger[800]': '#5F2323',
        'tw-danger[700]': '#8F3535',
        'tw-danger[600]': '#BE4646',
        'tw-danger[500]': '#EE5858',
      },
    },
  },
  plugins: [],
};
