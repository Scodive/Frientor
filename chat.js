function convertMarkdownToHTML(text) {
    // 处理粗体
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // 处理列表
    text = text.replace(/^\* (.*?)$/gm, '<li>$1</li>');
    text = text.replace(/(<li>.*?<\/li>)\n*/g, '<ul>$1</ul>');
    
    // 处理换行
    text = text.replace(/\n/g, '<br>');
    
    // 处理代码块
    text = text.replace(/```(.*?)```/gs, '<pre><code>$1</code></pre>');
    
    // 处理行内代码
    text = text.replace(/`(.*?)`/g, '<code>$1</code>');
    
    return text;
}

// 在添加消息时使用
function addMessage(message, isAI = true) {
    const messageContainer = document.querySelector('.messages-container');
    const messageElement = document.createElement('div');
    messageElement.className = `message-bubble ${isAI ? 'ai-message' : 'user-message'}`;
    messageElement.innerHTML = convertMarkdownToHTML(message);
    messageContainer.appendChild(messageElement);
    messageContainer.scrollTop = messageContainer.scrollHeight;
} 