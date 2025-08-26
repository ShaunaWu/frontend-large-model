# DeepSeek API 集成项目

这是一个用于集成DeepSeek（深度求索）大模型API的前端项目，提供了完整的API调用示例和用户界面。DeepSeek是专注于AGI研究的中国AI公司，提供高性能的大语言模型服务。

## 项目结构
```
/deepseek-api
  ├── index.html           # 主HTML文件
  ├── package.json         # 项目配置和依赖
  ├── src/
  │   ├── main.js          # 应用入口和UI逻辑
  │   ├── deepseek-api.js  # DeepSeek API调用封装
  │   └── style.css        # 样式文件
  └── vite.config.js       # Vite构建配置
```

## 功能特点
- DeepSeek API调用封装，实现与DeepSeek大模型的对话
- 简洁的用户界面，自动加载并显示AI回复
- 使用环境变量存储API密钥，保证安全性
- 错误处理和加载状态显示

## 环境配置

在项目根目录创建`.env.local`文件，并添加以下环境变量：
```
VITE_DEEPSEEK_API_KEY=your_api_key_here
```

- `VITE_DEEPSEEK_API_KEY`：您的DeepSeek API密钥

## 安装和运行

1. 安装依赖：
   ```bash
   npm install
   ```

2. 启动开发服务器：
   ```bash
   npm run dev
   ```

3. 构建生产版本：
   ```bash
   npm run build
   ```

4. 预览生产构建：
   ```bash
   npm run preview
   ```

## API使用说明

项目中封装了`fetchDeepseekResponse`函数，用于调用DeepSeek API：

```javascript
import { fetchDeepseekResponse } from './deepseek-api.js';

// 调用API并获取响应
const response = await fetchDeepseekResponse();
```

目前版本使用固定的系统提示和用户消息。您可以根据需要修改`deepseek-api.js`文件中的`payload`对象来自定义对话内容：

```javascript
const payload = {
    model: 'deepseek-chat',
    messages: [
        {role: "system", content: "You are a helpful assistant."},
        {role: "user", content: "你好 Deepseek"}
    ],
    stream: false,
};
```

## 技术栈
- HTML5
- CSS3
- JavaScript (ES6+)
- Vite 构建工具
- DeepSeek Open API

## 注意事项
- 请妥善保管您的API密钥，不要将其提交到代码仓库中
- DeepSeek API有使用限制和计费规则，请参考DeepSeek官方文档
- 本项目仅供学习和参考使用，实际应用中请遵守DeepSeek的使用条款