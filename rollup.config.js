import svelte from 'rollup-plugin-svelte'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import livereload from 'rollup-plugin-livereload'

export default [
	{
		input: 'example/main.js',
		output: {
			sourcemap: true,
			format: 'iife',
			name: 'app',
			file: 'example/bundle.js'
		},
		plugins: [
			svelte({
				dev: true,
				css: css => {
					css.write('example/bundle.css')
				}
			}),
			resolve({
				browser: true,
				dedupe: importee => importee === 'svelte' || importee.startsWith('svelte/')
			}),
			commonjs(),
			livereload('example')
		],
		watch: {
			clearScreen: false
		}
	}
]
