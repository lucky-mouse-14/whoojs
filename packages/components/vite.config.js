import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
export default defineConfig({
  plugins: [
    vue(),
    {
      name: 'style',
      generateBundle(config, bundle) {
        // 这里可以获取打包后的文件目录以及代码 code
        const keys = Object.keys(bundle)

        for(const key of keys) {
          const bundler = bundle[key]
          // rollup内置方法,将所有输出文件code中的.less换成.css,因为我们当时没有打包less文件
          this.emitFile({
            type: 'asset',
            fileName: key, // 文件名不变
            source: bundler.code.replace(/\.scss/g, '.css')
          })
        }
      }
    }
  ],
  build: {
    // 打包后文件目录
    outDir: 'whoojs',
    // 压缩
    // minify: false,
    rollupOptions: {
      // 忽略打包vue文件
      external: ["vue", /\.scss/, "@whoojs/utils"],
      input: ["index.js"],
      output: [
        {
          // 打包格式
          format: "es",
          // 打包后文件名
          entryFileNames: "[name].mjs",
          // 让打包目录和我们目录对应
          preserveModules: true,
          // 强制所有文件使用命名导出模式
          exports: "named",
          // 配置打包根目录
          dir: "../whoojs/es"
        },
        {
          // 打包格式
          format: "cjs",
          // 打包后文件名
          entryFileNames: "[name].js",
          // 让打包目录和我们目录对应
          preserveModules: true,
          // 强制所有文件使用命名导出模式
          exports: "named",
          // 配置打包根目录
          dir: "../whoojs/cjs"
        }
      ]
    },
    lib: {
      entry: "./index.js",
      name: "whoojs"
    }
  }
})