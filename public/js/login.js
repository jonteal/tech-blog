// LOGIN FORM HANDLER
const loginFormHandler = async (event) => {
    event.preventDefault();
    const username = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    // IF USERNAME & PASSWORD ARE CORRECT, LOG USER IN
    if (username && password) {

        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json'},
        });

        if (response.ok) {

            // RELOAD PAGE TO THE HOMEPAGE IF USER IS SUCCESSFULLY LOGGED IN
            document.location.replace('/');
        } else {
            alert('Failed to log in.');
        }
    }
};

// SIGN UP FORM HANDLER
const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#name-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    // IF USER ENTERS PASSABLE USERNAME & PASSWORD, SIGN THEM UP
    if (username && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        // ONCE RESPONSE IS PASSAGE, RELOAD PAGE TO THE HOMEPAGE
        if (response.ok) {
            document.location.replace('/')
        } else {
            alert('Failed to sign up. Password must be at least 5 characters in length.');
        }
    }
};

// EVENT LISTENER FOR LOGIN BUTTON
document    
    .querySelector('.login-form')
    .addEventListener('click', loginFormHandler);

// EVENT LISTENER FOR SIGN UP BUTTON
document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);