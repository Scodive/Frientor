class Typewriter {
    constructor(element, text, speed = 100) {
        this.element = element;
        this.text = text;
        this.speed = speed;
        this.currentText = '';
        this.currentIndex = 0;
        this.type();
    }

    type() {
        if (this.currentIndex < this.text.length) {
            this.currentText += this.text.charAt(this.currentIndex);
            this.element.textContent = this.currentText;
            this.currentIndex++;
            setTimeout(() => this.type(), this.speed);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const element = document.getElementById('typewriter');
    new Typewriter(element, 'The Next Generation of AI Agent', 150);
}); 