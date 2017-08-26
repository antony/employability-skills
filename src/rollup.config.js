import svelte from 'rollup-plugin-svelte'
import buble from 'rollup-plugin-buble'
import uglify from 'rollup-plugin-uglify'
import pkg from '../package.json'

export default {
  input: 'src/main.js',
  output: {
    file: `dist/employability-skills-${pkg.version}.js`,
    format: 'iife'
  },
  plugins: [
    svelte({
      include: 'src/components/*.html'
    }),
    buble(),
    uglify()
  ],
  watch: {
    include: 'src/**/**'
  }
}
