import './style.css'
import { fetchDeepseekResponse } from './deepseek-api.js'

// 设置界面
document.querySelector('#app').innerHTML = `
  <div class="app-container">
    <h1>Hello Deepseek!</h1>
    <div id="reply" class="reply-container">thinking...</div>
  </div>
`

// 调用Deepseek API并显示结果
async function initApp() {
  try {
    const response = await fetchDeepseekResponse();
    document.getElementById('reply').textContent = response;
  } catch (error) {
    console.error('Error fetching Deepseek response:', error);
    document.getElementById('reply').textContent = '获取响应失败: ' + error.message;
  }
}

// 初始化应用
initApp();
