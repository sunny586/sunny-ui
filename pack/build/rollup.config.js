import { defineConfig } from 'rollup'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import ts from 'rollup-plugin-typescript2'
import dts from 'rollup-plugin-dts'
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import babel from '@rollup/plugin-babel'
import alias from '@rollup/plugin-alias'
import vue from 'rollup-plugin-vue'

// import serve from 'rollup-plugin-serve'
// import path from 'path'

const outputDir = 'dist'

export default defineConfig([
  {
    input: '../../packages/main/index.ts',
    output: [
      {
        dir: outputDir,
        format: 'esm',
        entryFileNames: (chunk) => `[name].mjs`
      },
      {
        dir: outputDir,
        format: 'cjs',
        exports: 'named',
        entryFileNames: (chunk) => `[name].cjs`
      }
    ],
    // 这个插件是有执行顺序的
    plugins: [
      alias({
        entries: [
          {
            find: '@',
            replacement: new URL('./src', import.meta.url).pathname
          }
        ]
      }),
      nodeResolve({
        extensions: ['.js', '.ts', 'vue']
      }),
      commonjs(),
      ts({
        // tsconfig: path.resolve(__dirname, '../tsconfig.json')
        check: false
      }),
      vue(),
      postcss(),
      babel({
        // 指定 babel 处理文件类型
        babelHelpers: 'bundled', // 如果 vue 存在 jsx 语法，
        extensions: ['.js', '.vue', '.ts'] // 则会从 babel.config.js, 调用 @vue/babel-plugin-jsx 处理
      })
    ],
    external: [/^vue(\/.+|$)/]
  }, {
    input: '../../packages/main/index.ts',
    output: [
      {
        dir: outputDir,
        format: 'esm',
        entryFileNames: (chunk) => `index.d.ts`
      }
    ],
    plugins: [
      dts()
    ]
  }
])
