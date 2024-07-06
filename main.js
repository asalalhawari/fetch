document.addEventListener("DOMContentLoaded", function() {
    const signUpContainer = document.querySelector('.sign-up-container');
    const signInContainer = document.querySelector('.sign-in-container');
    const signUpLink = document.getElementById('signUpLink');
    const signInLink = document.getElementById('signInLink');

    signUpLink.addEventListener('click', (e) => {
        e.preventDefault();
        signUpContainer.classList.add('active');
        signInContainer.classList.remove('active');
    });

    signInLink.addEventListener('click', (e) => {
        e.preventDefault();
        signInContainer.classList.add('active');
        signUpContainer.classList.remove('active');
    });

    document.getElementById('signUpForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        fetch('http://localhost:3000/Username' + userId, { 
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            if (result.success) {
                alert("Account updated successfully.");
              
            } else {
                alert("Error: " + result.message);
            }
        })
        .catch(error => console.error('Error:', error));
    });

    document.getElementById('signInForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        fetch('http://localhost:3000/Username', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            if (result.success) {
                alert("Signed in successfully.");
              
            } else {
                alert("Error: " + result.message);
            }
        })
        .catch(error => console.error('Error:', error));
    });

    signInContainer.classList.add('active');
});
