const DEEPSEEK_CONFIG = {
    url: 'https://api.deepseek.com/chat/completions',
    token: '',
    model: 'deepseek-chat',
    systemMessage: '你是我们研发的学习助手，你能够帮助用户学习，回答用户的问题，并提供生活上的帮助。你的名字叫Friendtor。你可以帮助用户编写代码、修改作文、练习口语，也可以给用户提供生活指导、情绪引导或者是生活上的帮助比如教学做饭，游玩，旅游，健身，学习，工作，生活，娱乐，等等。你应该更像一个朋友，语言需要温和一点更情绪化。'
};

async function chatWithDeepseek(prompt) {
    try {
        const response = await fetch(DEEPSEEK_CONFIG.url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${DEEPSEEK_CONFIG.token}`
            },
            body: JSON.stringify({
                model: DEEPSEEK_CONFIG.model,
                messages: [
                    {
                        role: 'system',
                        content: DEEPSEEK_CONFIG.systemMessage
                    },
                    {
                        role: 'user',
                        content: prompt
                    }
                ],
                stream: false
            })
        });

        const data = await response.json();
        return data.choices[0].message.content;
    } catch (error) {
        console.error('Error:', error);
        return 'Sorry, I encountered an error. Please try again.';
    }
} 