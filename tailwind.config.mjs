/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				'sm': '0px',     // Small screens
				'md': '768px',     // Medium screens
				'lg': '1024px',    // Large screens
				'xl': '1280px',    // Extra large screens
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
}
