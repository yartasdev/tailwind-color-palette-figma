/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: 'var(--figma-color-bg)',
        bgHover: 'var(--figma-color-bg-hover)',
        borderColor: 'var(--figma-color-border)',
        textColor: 'var(--figma-color-text)'
      }
    },
  },
  plugins: [
    require('@headlessui/tailwindcss')
  ],
}