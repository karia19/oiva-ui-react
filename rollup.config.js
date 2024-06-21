//import sass from 'rollup-plugin-sass';
import typescript from 'rollup-plugin-typescript2';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

import postcss from 'rollup-plugin-postcss';
import pkg from './package.json' assert { type: "json" }

export default {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'es',
        exports: 'named',
        sourcemap: true,
        strict: false
      }
    ],
    plugins: [
        peerDepsExternal(),
        //sass({ insert: true }),
        typescript(),
        postcss()
    ],
    external: ['react', 'react-dom' ]
}