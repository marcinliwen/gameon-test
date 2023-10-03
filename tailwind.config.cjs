/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      screens: {
        xl: "1440px",
      },
    },
    extend: {
		colors:{
			gray:{
				100: "#F3F3F3",
				900: "#343434",
			},
			blue:{
				100: "#EFF6F6",
				200: "#A7C6C6",
				300: "#ABCFD1",
				800: "#3D8F94"
			}
		}
	},
  },
  plugins: [],
};
