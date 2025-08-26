import { fetchCozeResponse } from './coze-api.js'

// 等待DOM加载完成后初始化应用
document.addEventListener('DOMContentLoaded', () => {
  console.log('应用初始化中...');
  
  // 创建用户界面元素
  const container = document.createElement('div');
  container.className = 'app-container';
  
  const title = document.createElement('h1');
  title.textContent = 'Coze API 演示';
  
  const inputContainer = document.createElement('div');
  inputContainer.className = 'input-container';
  
  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = '请输入您的问题...';
  input.id = 'userInput';
  
  const button = document.createElement('button');
  button.textContent = '发送';
  button.addEventListener('click', sendMessage);
  
  // 允许按Enter键发送消息
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });
  
  const replyElement = document.createElement('div');
  replyElement.id = 'reply';
  replyElement.className = 'reply-container';
  replyElement.textContent = '请输入问题并点击发送按钮';
  
  // 将所有元素添加到页面中
  inputContainer.appendChild(input);
  inputContainer.appendChild(button);
  
  container.appendChild(title);
  container.appendChild(inputContainer);
  container.appendChild(replyElement);
  
  // 将容器添加到body中
  document.body.appendChild(container);
  
  console.log('用户界面创建完成');
});

// 发送消息到Coze API
async function sendMessage() {
  const userInput = document.getElementById('userInput');
  const replyElement = document.getElementById('reply');
  
  if (!userInput || !replyElement) {
    console.error('未找到必要的DOM元素');
    return;
  }
  
  const query = userInput.value.trim();
  
  if (!query) {
    replyElement.textContent = '请输入有效的问题';
    return;
  }
  
  // 清空输入框并显示加载状态
  userInput.value = '';
  replyElement.textContent = '正在获取响应...';
  
  console.log('准备调用Coze API，查询内容:', query);
  
  try {
    const response = await fetchCozeResponse(query, {
      userId: 'yvo'
    });
    console.log('API调用成功，响应内容:', response);
    replyElement.textContent = response;
  } catch (error) {
    console.error('Error fetching Coze response:', error);
    replyElement.textContent = '获取响应失败: ' + (error.message || '未知错误');
  }
}
