/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./templates/**/*.html",
		"./static/**/*.js",
		"./node_modules/flowbite/**/*.js",
	],
	theme: {
		extend: {
			colors: {
				// French flag colors
				"french-blue": "#0055A4",
				"french-white": "#FFFFFF",
				"french-red": "#EF4135",
			},
		},
	},
	plugins: [require("flowbite/plugin")],
};
