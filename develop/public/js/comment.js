const newFormHandler = async (event) => {
    event.preventDefault();

    const commentContent = document.querySelector('#comment-content').value;

    if (commentContent) {
        const response = await fetch(`/api/comment/comment`, { 
            method: 'POST',
            body: JSON.stringify({ commentContent }), 
            headers: {
                'Content-Type': 'application/json',
            },
    });

    console.log(response);

    if (response.ok) {
        document.location.reload(); 
    } else {
        alert('Failed to create comment');
    }
    }
};


document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newFormHandler);