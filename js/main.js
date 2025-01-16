document.addEventListener('DOMContentLoaded', () => {
    const BASE_URL = 'http://172.16.30.26';

    // Logo点击返回主页
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', () => {
            window.location.href = BASE_URL + '/';
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
            window.location.href = BASE_URL + '/learn-more.html';
        });
    });

    // FAQ 按钮跳转
    const faqButton = document.querySelector('.faq-btn');
    if (faqButton) {
        faqButton.addEventListener('click', () => {
            window.location.href = BASE_URL + '/faq.html';
        });
    }

    // Join BETA 按钮跳转
    const betaButtons = document.querySelectorAll('.join-beta');
    betaButtons.forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = BASE_URL + '/beta-signup.html';
        });
    });
}); 