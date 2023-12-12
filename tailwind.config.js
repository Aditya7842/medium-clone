/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'serif': ['sohne', "Helvetica Neue", 'Helvetica', 'Arial', 'sans-serif'],
      'own': ['gt-super', 'Georgia, Cambria', "Times New Roman", 'Times', 'serif'],
      'story': ['ui-sans-serif', 'system-ui', '-apple-system', "system-ui", "Segoe UI",'Roboto', "Helvetica Neue", 'Arial', "Noto Sans", 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"]
    },  
    fontSize: {
      'medium': '100px',
    },
    extend: {
      screens: {
        'small': '722px',
        'large': '903px',
        'ultra-small': '551px',
        'big': '1076px',
        'medium': '660px',
      }, 
      transitionDuration:{
        '300': '300ms',
      },
    },
  },
  plugins: [],
}

