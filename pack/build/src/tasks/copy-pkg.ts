import { src, dest } from 'gulp'
import path from 'path'
import { packages } from '../../constants'

export const copyPkg = () => {
  console.log('path.resolve', path.resolve(packages, './main/package.json'))
  return src(path.resolve(packages, './main/package.json'))
    .pipe(dest('dist/'));
}