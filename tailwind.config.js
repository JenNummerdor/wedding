import { nextui } from '@nextui-org/react';

const palette = {
  eucalyptus: {
    DEFAULT: '#4F5B53',
    50: '#f6f7f6',
    100: '#e2e5e3',
    200: '#c4cbc6',
    300: '#9eaaa1',
    400: '#79887d',
    500: '#5f6d63',
    600: '#4F5B53',
    700: '#3e4741',
    800: '#343b36',
    900: '#2e3330',
  },
  'dark-green': {
    DEFAULT: '#2E524A',
    100: '#dbece6',
    200: '#b7d8cd',
    300: '#8bbdae',
    400: '#629f8e',
    500: '#488474',
    600: '#38695e',
    700: '#2E524A',
    800: '#2a4540',
    900: '#263b37',
  },
  'cedar-rose': {
    DEFAULT: '#AC7B76',
    100: '#f4edec',
    200: '#ecdddc',
    300: '#ddc6c4',
    400: '#c8a5a1',
    500: '#AC7B76',
    600: '#9c6b66',
    700: '#815854',
    800: '#6c4b48',
    900: '#5c4340',
  },
  terracotta: {
    DEFAULT: '#91443E',
    100: '#f8e9e8',
    200: '#f2d8d6',
    300: '#e8bcb9',
    400: '#d99590',
    500: '#c8726b',
    600: '#b3564f',
    700: '#91443E',
    800: '#7c3d38',
    900: '#693733',
  },
  burgundy: {
    DEFAULT: '#78252E',
    100: '#fbebe8',
    200: '#f7d6d4',
    300: '#f0b6b1',
    400: '#e68b86',
    500: '#d95d5a',
    600: '#c43a3d',
    700: '#a42c31',
    800: '#8a272e',
    900: '#78252e',
  },
  paprika: {
    DEFAULT: '#94502D',
    100: '#f3e9d2',
    200: '#e5d2a2',
    300: '#d8b671',
    400: '#cfa050',
    500: '#c5853b',
    600: '#ae6831',
    700: '#94502D',
    800: '#774029',
    900: '#623525',
  },
  ivory: {
    DEFAULT: '#fff9e6',
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
            foreground: palette.terracotta['900'],
            /* Set page background color */
            background: palette.ivory,
            /* Set layout divider color */
            divider: palette.paprika,
            /* Set layout fous color */
            focus: palette.burgundy,
            /* Set values for NextUI "Semantic Colors" */
            primary: {},
            secondary: {},
          },
        },
      },
    }),
  ],
};
