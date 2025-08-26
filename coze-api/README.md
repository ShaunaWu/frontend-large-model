# Coze API 集成项目

这是一个用于集成Coze（扣子）大模型API的前端项目，提供了完整的API调用示例和用户界面。Coze是字节跳动推出的AI对话平台，提供强大的对话和生成能力。

## 项目结构
```
/coze-api
  ├── index.html       # 主HTML文件
  ├── package.json     # 项目配置和依赖
  ├── src/
  │   ├── main.js      # 应用入口和UI逻辑
  │   ├── coze-api.js  # Coze API调用封装
  │   └── style.css    # 样式文件
  └── vite.config.js   # Vite构建配置
```

## 功能特点
- Coze API调用封装，支持传入查询内容、用户ID和聊天历史
- 用户友好的交互界面，可输入问题并获取AI回复
- 使用环境变量存储API密钥，保证安全性
- 错误处理和加载状态显示

## 环境配置

在项目根目录创建`.env.local`文件，并添加以下环境变量：
```
VITE_BOT_ID=your_bot_id_here
VITE_API_KEY=your_api_key_here
```

- `VITE_BOT_ID`：您在Coze平台创建的智能体ID
- `VITE_API_KEY`：您的Coze API密钥

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

项目中封装了`fetchCozeResponse`函数，用于调用Coze API：

```javascript
import { fetchCozeResponse } from './coze-api.js';

// 基本用法
const response = await fetchCozeResponse('你的问题');

// 带选项的用法
const response = await fetchCozeResponse('你的问题', {
  userId: 'user123',  // 用户唯一标识
  chatHistory: [],    // 聊天历史
  stream: false       // 是否使用流式响应
});
```

## 技术栈
- HTML5
- CSS3
- JavaScript (ES6+)
- Vite 构建工具
- Coze Open API

## 注意事项
- 请妥善保管您的API密钥，不要将其提交到代码仓库中
- Coze API有使用限制和计费规则，请参考Coze官方文档
- 本项目仅供学习和参考使用，实际应用中请遵守Coze的使用条款