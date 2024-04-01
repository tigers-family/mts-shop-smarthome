/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: () => ({
        'block-1-bg': "url('/block-1-bg.jpg')",
      }),
      screens: {
        'sm': '390px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      colors: {
        'white': '#ffffff',
        'red': '#e30611',
        'black': '#000000',
        'cool-grey-10': '#58595b',
        'cool-grey-8': '#666465',
        'cool-grey-6': '#adafaf',
        'gray': '#8a8d8f'
      },
      fontFamily: {
        'mts': ['MTSSans', 'sans-serif'],
      }
    }
  },
  plugins: [],
}

