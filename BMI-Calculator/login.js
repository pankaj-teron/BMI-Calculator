document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const progressBar = document.querySelector('.progress-bar .progress');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = document.querySelector('input[name="username"]').value;
        const password = document.querySelector('input[name="password"]').value;

        if (username === 'admin' && password === '123') {
            progressBar.style.width = '100%';
            setTimeout(() => {
                alert('Login successful!');
                window.location.href = 'BMIcal.html';
            }, 20);
        } else {
            alert('Invalid username or password');
            progressBar.style.width = '0';
        }
    });
});
