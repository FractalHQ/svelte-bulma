import preprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	preprocess: [
		preprocess({
			defaults: {
				style: 'scss'
			},
			scss: {
				includePaths: [
					'node_modules',
					'src'
				]
			},
			postcss: {
				plugins: [autoprefixer()]
			},
		}),      
	],

	kit: {
		target: '#svelte'
	}
};

export default config;
