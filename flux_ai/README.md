# flux_ai

基于 Vue 3 + TypeScript + Vite 的前端大模型 API 集成项目

## 项目概述

flux_ai 是前端大模型 API 集成项目的一个子项目，专注于提供与 flux 大模型 API 进行交互的前端界面与功能实现。该项目使用现代前端技术栈，提供流畅的用户体验和高效的 API 调用能力。

## 功能特点

- 基于 Vue 3 Composition API 实现组件化开发
- 使用 TypeScript 提供完整的类型安全
- Vite 构建工具提供极速的开发体验
- 环境变量管理，安全存储 API 密钥
- 响应式 UI 设计，适配不同设备
- 完善的错误处理和用户反馈机制

## 项目结构
flux_ai/
├── .gitignore            # Git 忽略配置
├── .vscode/              # VS Code 配置
├── README.md             # 项目说明文档
├── index.html            # 入口 HTML 文件
├── package.json          # 项目依赖配置
├── public/               # 静态资源目录
├── src/                  # 源代码目录
│   ├── App.vue           # 根组件
│   ├── assets/           # 静态资源
│   ├── components/       # 公共组件
│   ├── main.ts           # 应用入口文件
│   ├── style.css         # 全局样式
│   └── vite-env.d.ts     # Vite 环境类型定义
├── tsconfig.app.json     # TypeScript 应用配置
├── tsconfig.json         # TypeScript 主配置
├── tsconfig.node.json    # TypeScript Node 配置
└── vite.config.ts        # Vite 配置


## 环境配置

项目需要在根目录创建 `.env.local` 文件，并配置以下环境变量：

```env
# Flux AI API 密钥
VITE_API_KEY=your_api_key_here
```

## 安装与运行

### 前置条件

- Node.js 14.18+ 或 16+
- npm 6+ 或 yarn/pnpm

### 安装依赖

```bash
cd /Users/wuxiaona/Desktop/study/frontend-large-model/flux_ai
npm install
```

### 开发模式运行

```bash
npm run dev
```

开发服务器将在 http://localhost:5173 启动。

### 构建生产版本

```bash
npm run build
```

构建后的文件将输出到 `dist` 目录。

### 预览生产版本

```bash
npm run preview
```

## 技术栈

- **框架**: Vue 3
- **语言**: TypeScript
- **构建工具**: Vite
- **包管理器**: npm
- **样式**: CSS

## API 端点说明

项目默认使用配置的 API 密钥与 flux 大模型 API 进行通信。主要的 API 调用包括：

- 文本生成请求
- 模型响应处理
- 错误处理与重试机制

## 注意事项

1. 请确保 `.env.local` 文件已添加到 `.gitignore` 中，避免泄露 API 密钥
2. 开发环境下，API 调用可能会有跨域问题，请确保后端服务已配置 CORS
3. 生产环境中，建议使用 HTTPS 协议以确保数据传输安全
4. 如果遇到构建错误，确保已安装 `@types/node` 依赖：`npm install --save-dev @types/node`
5. 项目使用 Vue 3 的 `<script setup>` 语法，详细用法请参考 [Vue 官方文档](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup)

## 许可证

MIT