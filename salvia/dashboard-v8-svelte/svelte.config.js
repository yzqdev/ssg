import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter()

		// Override http methods in the Todo forms
		// methodOverride: {
		// 	allowed: ['PATCH', 'DELETE']
		// }
	}
};

export default config;
