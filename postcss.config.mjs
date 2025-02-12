/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
};

export default config;

//module.exports = { 
//	mode: 'jit', 
//	purge: [ 
//		'./pages/**/*.{js,ts,jsx,tsx}', 
//		'./components/**/*.{js,ts,jsx,tsx}', 
//	], 
//	theme: { 
//		extend: {}, 
//	}, 
//	variants: {}, 
//	plugins: [], 
//}
