# AI SSE 项目

这是一个结合了 Vue 3 + TypeScript 前端和 Express 后端的 AI 流式响应演示项目，集成了 DeepSeek API 并通过 SSE (Server-Sent Events) 实现服务器推送的流式数据传输。

## 功能特点

- **SSE 实时数据流**：通过 Server-Sent Events 技术实现服务端到客户端的单向实时数据流
- **DeepSeek API 集成**：与 DeepSeek 大语言模型进行交互，获取 AI 生成的内容
- **前后端分离架构**：Vue 3 + TypeScript 前端与 Express 后端分离设计
- **流式内容展示**：实时展示 AI 生成的内容，提供更好的用户体验
- **环境变量配置**：通过 .env 文件安全管理 API 密钥等敏感信息

## 项目结构
ai-sse/
├── .gitignore           # Git 忽略配置
├── .vscode/             # VS Code 配置
│   └── extensions.json  # 推荐的 VS Code 扩展
├── README.md            # 项目文档（当前文件）
├── index.html           # 前端入口 HTML
├── package.json         # 项目配置和依赖
├── package-lock.json    # 依赖版本锁定
├── public/              # 静态资源目录
│   └── vite.svg         # Vite 图标
├── server.js            # Express 服务器代码
├── src/                 # 前端源代码目录
│   ├── App.vue          # 主应用组件
│   ├── assets/          # 资源文件
│   ├── components/      # Vue 组件
│   ├── main.ts          # 前端入口文件
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

项目需要同时启动前端和后端服务：

1. 启动前端开发服务器：
```bash
npm run dev
```

2. 在另一个终端窗口启动后端 Express 服务器：
```bash
node server.js
```

前端服务默认运行在 `http://localhost:5173`，后端 API 服务运行在 `http://localhost:3000`。

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## API 端点

### `/stream`

- **方法**：GET
- **描述**：获取 AI 流式响应的 SSE 端点
- **参数**：
  - `question`（必需）：用户的问题或查询
- **返回**：文本事件流（text/event-stream）

## 后端核心功能

后端服务器（server.js）的主要功能包括：

1. 设置 Express 应用并配置 CORS
2. 创建 SSE 端点以支持服务器推送
3. 调用 DeepSeek API 获取 AI 生成的内容
4. 使用流处理技术（ReadableStream.getReader）处理 AI 响应
5. 将处理后的内容通过 SSE 实时推送给前端

## 前端使用方法

前端可以通过 EventSource API 连接到后端的 SSE 端点：

```javascript
const eventSource = new EventSource(`/stream?question=${encodeURIComponent(userQuestion)}`);

// 监听消息事件
eventSource.addEventListener('message', (event) => {
  // 处理接收到的数据流
  console.log('Received data:', event.data);
});

// 监听结束事件
eventSource.addEventListener('end', () => {
  eventSource.close();
});

// 监听错误事件
eventSource.addEventListener('error', (error) => {
  console.error('Error with SSE:', error);
  eventSource.close();
});
```

## 技术栈

- **前端**：Vue 3 + Composition API + TypeScript + Vite
- **后端**：Express.js
- **数据传输**：Server-Sent Events (SSE)
- **AI 集成**：DeepSeek API
- **环境配置**：dotenv

## 注意事项

- 请确保您已获取有效的 DeepSeek API Key 并正确配置到环境变量中
- 服务器默认运行在 3000 端口，如果该端口已被占用，可以在 server.js 中修改 `port` 变量
- SSE 连接在完成数据传输后会自动关闭，也可以在前端手动关闭
- 目前项目使用的是 `deepseek-chat` 模型，如有需要可在 server.js 中修改 `model` 参数

## License

MIT