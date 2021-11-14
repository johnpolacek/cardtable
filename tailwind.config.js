module.exports = {
	mode: "jit",
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			width: {
				1200: "1200px",
			},
			maxWidth: {
				480: "480px",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
