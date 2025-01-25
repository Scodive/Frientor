document.addEventListener('DOMContentLoaded', () => {
    const BASE_URL = '';

    // CHAT 按钮跳转
    const chatButtons = document.querySelectorAll('.chat-btn');
    console.log('Found chat buttons:', chatButtons.length);
    
    chatButtons.forEach(button => {
        console.log('Adding click listener to chat button');
        button.addEventListener('click', () => {
            console.log('Chat button clicked');
            window.location.href = 'chat.html';
        });
    });

    // Logo点击返回主页
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }

    // Demo按钮返回主页
    const demoBtn = document.querySelector('.demo-btn');
    if (demoBtn) {
        demoBtn.addEventListener('click', () => {
            window.location.href = BASE_URL + '/';
        });
    }

    // Learn more 按钮跳转
    const learnMoreBtns = document.querySelectorAll('.learn-more-btn');
    learnMoreBtns.forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = 'learn-more.html';
        });
    });

    // FAQ 按钮跳转
    const faqButton = document.querySelector('.faq-btn');
    if (faqButton) {
        faqButton.addEventListener('click', () => {
            window.location.href = 'faq.html';
        });
    }

    // Join BETA 按钮跳转
    const betaButtons = document.querySelectorAll('.join-beta');
    betaButtons.forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = 'beta-signup.html';
        });
    });
}); 