import {
  gray,
  blue,
  red,
  green,
  slate,
  tomato,
  amber,
  indigo,
  orange,
} from '@radix-ui/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        ...gray,
        ...slate,
        ...blue,
        ...red,
        ...green,
        ...tomato,
        ...amber,
        ...indigo,
        ...orange,
      },
      maxWidth: {
        180: '45rem',
        220: '55rem',
      },
      padding: {
        18: '4.5rem',
      },
      transitionProperty: {
        left: 'left',
      },
    },
  },
};
