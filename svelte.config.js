import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			out: "app",
			pages: 'build',
      		assets: 'build',
			strict: true,
		}),
	},
	
};

export default config;
