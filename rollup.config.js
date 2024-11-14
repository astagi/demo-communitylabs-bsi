import summary from 'rollup-plugin-summary';
import terser from '@rollup/plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import scss from 'rollup-plugin-scss';
import commonjs from 'rollup-plugin-commonjs'


export default {
  input: 'src/main.js',
  output: {
    file: 'dist/main.bundle.js',
    format: 'umd'
  },
  onwarn(warning) {
    if (warning.code !== 'THIS_IS_UNDEFINED') {
      console.error(`(!) ${warning.message}`);
    }
  },
  plugins: [
    scss({
        output: 'dist/main.min.css',
        outputStyle: 'compressed',
    }),
    resolve(),
    commonjs(),
    terser({
      ecma: 2021,
      module: true,
      warnings: true,
      mangle: {
        properties: {
          regex: /^__/,
        },
      },
    }),
    summary(),
  ],
};
