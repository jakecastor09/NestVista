/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pryGreen: '#5B9A8B',
        pryBlue: '#252B48',
        lightGray: '#FAFAFA',
        grayGreen: '#EDF3F2',
        textTitle: '#333333',
        textBody: '#666666',
        infield: '#B8B8B8',
        disable: '#EBEBEB',
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
