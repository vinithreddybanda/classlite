document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registerForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Perform validation
        if (username === '' || email === '' || password === '') {
            alert('All fields are required.');
            return;
        }

        // Simulate a registration request
        console.log('Registering user:', { username, email, password });

        // Clear the form
        form.reset();
    });
});