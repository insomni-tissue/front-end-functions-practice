import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
const getProxyConfig = require('./build/proxy');

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, `${process.cwd()}/env`, '')
  Object.assign(process.env, env, { NODE_ENV: mode })
  return {
    mode,
    // env配置文件变量前缀
    envPrefix: 'SIS_',
    // env配置文件夹位置
    envDir: 'env',
    // 构建后文件引用 相对路径
    base: env.SIS_PUBLIC_PATH, // 同webpack assetsPublicPath
    plugins: [vue(), vueJsx()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      // host设置为true才可以使用network的形式，以ip访问项目
      host: true,
      port: 8082,
      open: false,
      hmr: {
        overlay: false
      },
      // 跨域设置允许
      cors: true,
      // 如果端口已占用直接退出
      strictPort: true,
      proxy: getProxyConfig()
    },
    // css全局配置
    css: {
      preprocessorOptions: {
        // less: {
        //     javascriptEnabled: true,
        //     additionalData:  `@import "${resolve(__dirname, 'src/assets/styles/base.less')}";`
        // }
        less: {
          modifyVars: {
            hack: `true; @import (reference) "${resolve('src/assets/styles/variables.less')}";`,
          },
          javascriptEnabled: true
        }
      }
    },
    build: {
      minify: "terser", // 必须开启：使用 terserOptions 才有效果
      terserOptions: {
        compress: {
          // drop_console: process.env.NODE_ENV === 'production' ? true : false,
          // drop_debugger: process.env.NODE_ENV === 'production' ? true : false,
        },
      },
      // TODO 处理不需要打包的依赖库
      // rollupOptions: {
      //   // 确保外部化处理那些你不想打包进库的依赖
      //   external: ['vue'],
      //   output: {
      //     // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
      //     globals: {
      //       vue: 'Vue',
      //     },
      //   },
      // },
    },
  }
})
