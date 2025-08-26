# 前端大模型API集成项目

这是一个用于集成多个大模型API的前端项目集合，包含了与不同AI服务提供商的API交互示例。

## 项目结构
```
/frontend-large-model
├── coze-api/       # 集成Coze（扣子）大模型API的前端项目
├── deepseek-api/   # 集成DeepSeek（深度求索）大模型API的前端项目
├── ai-sse/         # Vue 3 + TypeScript + Express + SSE 实现的AI流式响应项目
├── ai-streaming/   # Vue 3 + TypeScript 实现的AI流式响应前端项目
└── README.md       # 根目录项目说明
```


## 项目概述

本仓库包含多个独立的前端项目，分别展示了如何与不同的大语言模型API进行集成和交互，以及不同的流式响应实现方式。每个项目都是一个完整的前端应用，可以独立运行和部署。

### 项目特点
- 提供了多种大模型API的集成示例
- 包含完整的前端界面和交互逻辑
- 使用现代化的前端技术栈（HTML、CSS、JavaScript/TypeScript、Vite）
- 支持环境变量配置，保护API密钥安全
- 展示了不同的AI响应流式处理实现方式

## 子项目介绍

### 1. coze-api

该项目展示了如何与Coze（扣子）大模型API进行集成。Coze是字节跳动推出的AI对话平台，提供强大的对话和生成能力。

### 2. deepseek-api

该项目展示了如何与DeepSeek（深度求索）大模型API进行集成。DeepSeek是专注于AGI研究的中国AI公司，提供高性能的大语言模型服务。

### 3. ai-sse

该项目是一个结合了Vue 3 + TypeScript前端和Express后端的AI流式响应演示项目，集成了DeepSeek API并通过SSE (Server-Sent Events)实现服务器推送的流式数据传输。

主要特点：
- 通过Server-Sent Events技术实现服务端到客户端的单向实时数据流
- 前后端分离架构设计
- 实时展示AI生成的内容，提供更好的用户体验

### 4. ai-streaming

该项目是一个Vue 3 + TypeScript实现的AI流式响应前端项目，展示了如何直接在前端处理来自AI API的流式响应。

## 如何使用

每个子项目都是一个独立的Vite项目，可以按照以下步骤使用：

1. 进入相应的子项目目录：
   ```bash
   cd coze-api       # 或 cd deepseek-api
   cd ai-sse         # 或 cd ai-streaming

2. 安装依赖：
   ```bash
   npm install
   ```

3. 创建`.env.local`文件，添加API密钥等配置信息

4. 启动开发服务器：
   ```bash
   npm run dev
   ```

   注意 ：对于ai-sse项目，还需要在另一个终端窗口启动后端Express服务器：
   ```bash
   node server.js
   ```

5. 构建生产版本：
   ```bash
   npm run build
   ```

## 环境变量配置

每个项目都需要在`.env.local`文件中配置相应的API密钥和其他必要参数。具体配置项请参考各子项目中的说明。

## 技术栈
- HTML5
- CSS3
- JavaScript (ES6+)/TypeScript
- Vue 3 (for ai-sse and ai-streaming)
- Express (for ai-sse backend)
- Vite 构建工具
- 各AI平台的API客户端库

## 注意事项
- 请妥善保管您的API密钥，不要将其提交到代码仓库中
- 不同的AI服务可能有不同的使用限制和计费方式，请参考各平台的官方文档
- 本项目仅供学习和参考使用，实际应用中请遵守各AI服务的使用条款

## 许可证

本项目采用MIT许可证。