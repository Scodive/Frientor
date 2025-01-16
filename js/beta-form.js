document.addEventListener('DOMContentLoaded', () => {
    const BASE_URL = 'http://172.16.30.26';
    const form = document.getElementById('betaForm');
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = {
            ...Object.fromEntries(formData),
            functions: Array.from(formData.getAll('functions'))
        };
        
        try {
            const response = await fetch(BASE_URL + '/api/beta-signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            
            if (response.ok) {
                alert('Thank you for your interest! We will contact you soon.');
                window.location.href = BASE_URL + '/';
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Something went wrong. Please try again.');
        }
    });
}); 