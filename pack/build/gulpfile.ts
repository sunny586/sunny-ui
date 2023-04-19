import { series, parallel } from 'gulp'
import { runTask, withTaskName } from './utils'
import { run } from './process'

export default series(
  withTaskName('clean', () => run('pnpm run clean')),

  parallel(
    withTaskName('buildFull', () => run('pnpm run build:rollup')),
    runTask('copyPkg')
  )
)

export * from './src'
