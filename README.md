# nii-base

自用 Vue3 Base Template

## 插件说明

#### 自动导入

- 自动导入 /src/components/\* 下的所有 vue 文件  
- 自动导入 /src/store/\*\* 下的所有 js 文件导出函数  
- 自动导入 /src/utils/\* 下的所有 js 文件导出函数  
- 自动导入 /src/api/index.js 接口  
- 自动导入 vue 函数  
- 自动导入 vue-router 函数  
- 自动导入 pinia 函数  

#### 使用的插件

- 使用 Sass 作为 css 预编译  
- 使用 Vue3-router 作为路由  
- 使用 Vue3-pinia 作为状态管理  
- 使用 pinia-plugin-persistedstate 状态持久化  
- 使用 Axios 作为请求库  
- 使用 BigNumber.js 作为数字处理库  
- 使用 Dayjs 作为日期处理库  

## 项目结构

src  
│├──── api # 接口  
│├──── assets # 静态资源  
│├──── components # 组件  
│├──── hooks # 钩子函数  
│├──── router # 路由  
│├──── stores # 状态管理  
│├──── utils # 工具函数  
│└──── views # 页面  
├── App.vue  
└── main.js

## 项目初始化

节省磁盘空间，所以我们使用 pnpm 安装依赖

```sh
npm install -g pnpm
```

安装依赖

```sh
pnpm install
```

### 启动本地开发服务

```sh
pnpm dev
```

### 启动打包生产环境

```sh
pnpm build
```
