import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript'

import pkg from './package.json'

export default {
    input: 'src/index.ts',
    output: {
        file: pkg.browser,
        name: 'index.js',
        format: 'umd' // umd是兼容amd/cjs/iife的通用打包格式，适合浏览器
    },
    plugins: [
        resolve(),
        commonjs(),
        typescript()
    ]
}