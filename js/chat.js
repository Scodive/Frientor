document.addEventListener('DOMContentLoaded', () => {
    const BASE_URL = '';  // 改为空字符串
    const chatMessages = document.getElementById('chatMessages');
    const userInput = document.getElementById('userInput');
    const sendButton = document.getElementById('sendButton');

    console.log('Chat.js loaded'); // 调试信息
    
    // 配置 marked
    marked.setOptions({
        breaks: true,
        gfm: true,
        highlight: function(code, language) {
            if (language && hljs.getLanguage(language)) {
                return hljs.highlight(code, { language }).value;
            }
            return code;
        }
    });

    function addMessage(content, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
        
        if (isUser) {
            messageDiv.textContent = content;
        } else {
            // 将 markdown 转换为 HTML
            messageDiv.innerHTML = marked.parse(content);
        }
        
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    async function handleSend() {
        const message = userInput.value.trim();
        if (!message) return;

        console.log('Handle send triggered'); // 调试信息

        // 如果在主页，跳转到聊天页面
        if (!document.body.classList.contains('chat-page')) {
            console.log('Redirecting to chat page'); // 调试信息
            localStorage.setItem('pendingMessage', message);
            window.location.href = BASE_URL + '/chat.html';
            return;
        }

        addMessage(message, true);
        userInput.value = '';
        userInput.disabled = true;
        sendButton.disabled = true;

        try {
            const response = await chatWithDeepseek(message);
            addMessage(response);
        } catch (error) {
            addMessage('Sorry, something went wrong. Please try again.');
        }

        userInput.disabled = false;
        sendButton.disabled = false;
        userInput.focus();
    }

    // 检查是否有待发送的消息
    const pendingMessage = localStorage.getItem('pendingMessage');
    if (pendingMessage && document.body.classList.contains('chat-page')) {
        userInput.value = pendingMessage;
        localStorage.removeItem('pendingMessage');
        handleSend();
    }

    if (sendButton) {
        console.log('Send button found'); // 调试信息
        sendButton.addEventListener('click', handleSend);
    } else {
        console.log('Send button not found'); // 调试信息
    }

    if (userInput) {
        userInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleSend();
        });
    }
}); 