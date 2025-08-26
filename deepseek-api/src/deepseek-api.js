// 导出一个函数用于调用Deepseek API
export async function fetchDeepseekResponse() {
    const endpoint = 'https://api.deepseek.com/chat/completions';
    const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_DEEPSEEK_API_KEY}`
    };

    const payload = {
        model: 'deepseek-chat',
        messages: [
            {role: "system", content: "You are a helpful assistant."},
            {role: "user", content: "你好 Deepseek"}
        ],
        stream: false,
    };

    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error(`API请求失败: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        return data.choices[0].message.content;
    } catch (error) {
        console.error('Deepseek API调用错误:', error);
        throw error;
    }
}