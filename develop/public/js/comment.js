// HANDLER FOR CREATING NEW COMMENTS
const newFormHandler = async (event) => {
    event.preventDefault();

    const commentContent = document.querySelector('#comment-content').value;

    // POST METHOD TO CREATE NEW COMMENT 
    if (commentContent) {
        const response = await fetch(`/api/comment/comment`, { 
            method: 'POST',
            body: JSON.stringify({ commentContent }), 
            headers: {
                'Content-Type': 'application/json',
            },
    });

    // console.log(response);

    // RELOAD THE PAGE AFTER COMMENT POSTS TO SHOW COMMENT IN THREAD
    if (response.ok) {
        document.location.reload(); 
    } else {
        alert('Failed to create comment');
    }
    }
};

// EVENT LISTENER FOR 'ADD' COMMENT BUTTON
document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newFormHandler);