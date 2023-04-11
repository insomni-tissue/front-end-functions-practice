# vue3-webpack-elementPlus-admin
node.js 14.18+
## Project Setup
```sh
npm install
```
### Compile and Hot-Reload for Development
```sh
npm run dev
```
### Type-Check, Compile and Minify for Sit
```sh
npm run sit
```
### Type-Check, Compile and Minify for Uat
```sh
npm run uat
```
### Type-Check, Compile and Minify for Production
```sh
npm run prod
```
### Run Unit Tests with [Vitest](https://vitest.dev/)
```sh
npm run test:unit
```
### Lint with [ESLint](https://eslint.org/)
```sh
npm run lint
```
## 项目结构说明
```
└── build // 构建抽离
    ├── proxy.js // 接口代理配置
└── docs  // 项目文档说明
    ├── user-url.json // 项目测试连接账号
└── env  // 环境变量相关配置
    ├── .env // 公用变量配置
    ├── .env.development // 开发环境变量配置
    ├── .env.production // 生产环境变量配置
    ├── .env.sit // 测试环境变量配置
    ├── .env.uat // 业务验收环境变量配置
└── src
    ├── App // 项目路由入口
    └── assets // 静态文件
        ├── dic // 字段库
        ├── images // 图片
        ├── js // js库
        ├── styles // 样式库
    └── components // 公用组件
    └── composables // 公用Hooks函数
    └── const // 常量定义
    └── entity // 实体（class类）-- 页面级别
    └── enum // 枚举值
    └── infrastructure // 基础设施实体（class类） -- 项目级别（如配置数据、人脸、定位等功能相关实体）
    └── interface // 类型定义
    └── lang // 多语言
    └── router // 路由配置
    └── server // 接口
    └── sotres // 状态管理（缓存）
    └── types // 自定义全局类型
    └── utils // 常用方法
    └── views // 页面
    └── main.js // Vue配置入口
├── .eslintrc.cjs // ESLint 规则配置
├── index.html // 项目单页入口
├── package.json // 项目依赖
```

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).
