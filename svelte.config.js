import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			out: "app",
			pages: 'build',
      		assets: 'build',
			fallback: null,
			strict: true,
		}),
		paths: {
			base: "/quiz-app",
		},
	},
	
};

export default config;
