import { nextui } from '@nextui-org/react';

const palette = {
  text: {
    50: '#fee9e7',
    100: '#fcd3cf',
    200: '#f9a69f',
    300: '#f77a6e',
    400: '#f44d3e',
    500: '#f1210e',
    600: '#c11a0b',
    700: '#911408',
    800: '#600d06',
    900: '#300703',
    950: '#180301',
  },
  background: {
    50: '#f2f2f2',
    100: '#e6e6e6',
    200: '#cccccc',
    300: '#b3b3b3',
    400: '#999999',
    500: '#808080',
    600: '#666666',
    700: '#4d4d4d',
    800: '#333333',
    900: '#1a1a1a',
    950: '#0d0d0d',
  },
  primary: {
    50: '#f0f4f0',
    100: '#e2eae1',
    200: '#c5d4c4',
    300: '#a8bfa6',
    400: '#8ba989',
    500: '#6e946b',
    600: '#587656',
    700: '#425940',
    800: '#2c3b2b',
    900: '#161e15',
    950: '#0b0f0b',
  },
  secondary: {
    50: '#fcf1e8',
    100: '#f9e4d2',
    200: '#f3c8a5',
    300: '#edad78',
    400: '#e8914a',
    500: '#e2761d',
    600: '#b55e17',
    700: '#874712',
    800: '#5a2f0c',
    900: '#2d1806',
    950: '#170c03',
  },
  accent: {
    50: '#fde9e8',
    100: '#fad3d1',
    200: '#f6a6a2',
    300: '#f17a74',
    400: '#ed4e45',
    500: '#e82117',
    600: '#ba1b12',
    700: '#8b140e',
    800: '#5d0d09',
    900: '#2e0705',
    950: '#170302',
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        invitation: ['invitation', 'cursive'],
      },
      /**
       * Add our color palette with shade variants to tailwind. These colors will be available through tailwind as
       * color directives for text (text-*), background (bg-*), and border (border-*) colors.
       *
       * See (Using custom colors)[https://tailwindcss.com/docs/customizing-colors#using-custom-colors] for reference.
       */
      colors: palette,
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      /* Set prefix for theme variables */
      prefix: 'wedding',
      defaultTheme: 'light',
      themes: {
        'wedding-light': {
          extend: 'light',
          colors: {
            /* Set page text color */
            foreground: palette.text['800'],
            /* Set page background color */
            background: palette.background['50'],
            /* Set layout divider color */
            divider: palette.primary['500'],
            /* Set layout focus color */
            focus: palette.accent['900'],
            /* Set values for NextUI "Semantic Colors" */
            primary: {},
            secondary: {},
          },
        },
      },
    }),
  ],
};
