document.querySelector('.login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (email && password) {
        alert(`Welcome back! You've logged in as ${email}`);
        // Redirect to home page after successful login
        setTimeout(() => {
            window.location.href = 'F1.html';
        }, 1000);
    }
});