// LOGOUT HANDLER
const logout = async () => {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    // IF RESPONSE IS OKAY, LOG OUT USER AND RETURN TO HOMEPAGE
    if (response.ok) {
        document.location.replace('/');
    } else {
        alert("You failed to log out");
    }
};

// EVENT LISTENER FOR LOGOUT BUTTON
document.querySelector('#logout').addEventListener('click', logout);