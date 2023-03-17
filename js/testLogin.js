const form = document.querySelector('#login-form');

form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the form from submitting normally

    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    try {
        const response = await fetch('/cinema_database', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
});