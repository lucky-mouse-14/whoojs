import { pkgPath, componentsPath } from "../utils/paths.js"
import delPath from "../utils/delPath.js"
import { series, parallel, src, dest } from "gulp"
import dartSass from 'sass'
import gulpSass from "gulp-sass"
import gulpAutoprefixer from "gulp-autoprefixer"
import run from '../utils/run'

const sass = gulpSass(dartSass)

// 清空whoojs打包文件夹啊
export const removeDist = () => {
  return delPath(`${pkgPath}/whoojs`)
}

// 打包样式
export const buildStyle = () => {
  return src(`${componentsPath}/*/style/*.scss`)
    .pipe(sass())
    .pipe(gulpAutoprefixer())
    .pipe(dest(`${pkgPath}/whoojs/cjs`))
    .pipe(dest(`${pkgPath}/whoojs/es`))
}

// 打包组件
export const buildComponent = async () => {
  run('pnpm run build', componentsPath)
}

export default series(
  async () => removeDist(),
  parallel(
    async () => buildStyle(),
    async () => buildComponent()
  )
)