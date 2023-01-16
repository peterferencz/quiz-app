import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
      		assets: 'build',
			fallback: null,
			strict: true,
		}),
		appDir: "app",
		paths: {
			base: "/quiz-app",
		},
	},
	
};

export default config;
