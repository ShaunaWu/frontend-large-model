// 导出一个函数用于调用Deepseek API
/**
 * 调用Coze API获取智能体回复
 * @param {string} query - 用户的查询内容
 * @param {Object} options - 可选配置参数
 * @param {string} options.userId - 用户唯一标识
 * @returns {Promise<string>} - 智能体的回复内容
 */
export async function fetchCozeResponse(query, options = {}) {
  // 检查必要的环境变量
  if (!import.meta.env.VITE_BOT_ID || !import.meta.env.VITE_API_KEY) {
    throw new Error('缺少必要的环境变量: VITE_BOT_ID 或 VITE_API_KEY');
  }

  const endpoint = "https://api.coze.cn/open_api/v2/chat";
  const payload = {
    bot_id: import.meta.env.VITE_BOT_ID,
    user: options.userId || "default_user",
    query: query,
    chat_history: options.chatHistory || [],
    stream: options.stream || false,
    custom_variables: {
      prompt: "你是一个AI助手",
    },
  };

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `API请求失败: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    
    // 检查响应结构是否符合预期
    if (!data || !data.messages || !data.messages[0] || !data.messages[0].content) {
      throw new Error("API返回格式不正确");
    }

    return data.messages[0].content;
  } catch (error) {
    console.error('Coze API调用错误:', error.message);
    throw error;
  }
}
