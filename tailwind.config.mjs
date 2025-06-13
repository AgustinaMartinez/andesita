/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        slideDown: 'slideDown 0.5s ease-out forwards',
      },
      boxShadow: {
        'shadow-inset-custom': 'inset 0px 0px 150px 0px rgba(0,0,0,0.51)', // Define clases personalizadas aquí
      },
    },
	},
	plugins: [],
}
