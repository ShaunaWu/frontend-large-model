# AI Streaming 项目

这是一个基于 Vue 3、TypeScript 和 Vite 的 AI 流式响应演示项目，集成了 DeepSeek API，实现了文本流式生成功能。

## 功能特点

- **AI 聊天交互**：与 DeepSeek 大语言模型进行对话交互
- **流式响应支持**：支持开启/关闭流式响应模式，实时展示 AI 生成的内容
- **响应式设计**：简洁直观的用户界面，易于使用
- **TypeScript 支持**：完整的类型定义，提供更好的开发体验

## 项目结构

ai-streaming/
├── index.html           # 入口 HTML 文件
├── package.json         # 项目配置和依赖
├── public/              # 静态资源目录
│   └── vite.svg         # Vite 图标
├── src/                 # 源代码目录
│   ├── App.vue          # 主应用组件
│   ├── assets/          # 资源文件
│   ├── components/      # Vue 组件
│   ├── main.ts          # 应用入口文件
│   ├── style.css        # 全局样式
│   └── vite-env.d.ts    # Vite 环境类型定义
├── tsconfig.app.json    # TypeScript 应用配置
├── tsconfig.json        # TypeScript 主配置
├── tsconfig.node.json   # TypeScript Node 配置
└── vite.config.ts       # Vite 配置

## 环境配置

在项目根目录创建 `.env.local` 文件，并添加以下环境变量：

```env
VITE_DEEPSEEK_API_KEY=your_deepseek_api_key_here
```

## 安装与运行

### 安装依赖

```bash
npm install
```

### 开发模式运行

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 使用说明

1. 启动应用后，在输入框中输入您的问题或指令
2. 点击"提交"按钮发送请求给 AI 模型
3. 可以通过勾选/取消勾选"Streaming"复选框来启用/禁用流式响应模式
4. AI 响应结果将显示在下方输出区域

## 核心功能实现

项目的核心功能在 `src/App.vue` 中实现，主要包括：

- 使用 `fetch` API 调用 DeepSeek API
- 支持流式和非流式两种响应模式
- 使用 `ReadableStream.getReader()` 处理流式响应
- 通过 TextDecoder 解码二进制数据流
- 实时更新 UI 显示生成的内容

## 技术栈

- Vue 3 + Composition API + `<script setup>`
- TypeScript
- Vite
- DeepSeek API

## 注意事项

- 请确保您已获取有效的 DeepSeek API Key 并正确配置到环境变量中
- 流式响应模式下，AI 生成的内容会逐字显示，提供更好的交互体验
- 非流式响应模式下，需等待 AI 生成完整内容后一次性显示
- 项目默认使用 `deepseek-chat` 模型，如有需要可在代码中修改

## License

MIT