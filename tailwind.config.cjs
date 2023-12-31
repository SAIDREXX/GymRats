/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			Russo: ['"Russo One"', 'sans-serif'],
			Kanit: ['"Kanit"', 'sans-serif'],
		},
		extend: {
			colors: {
				gymgray: '#555',
				gymred: '#BF0615',
				gymblack: '#121212',
				gymborderred: '#540000',
				stepscolor: '#979797'
			}
		},
	},
	plugins: [],
}
