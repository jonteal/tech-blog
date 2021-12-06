// New Post Form Handler
const newFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#post-title').value.trim();
    const description = document.querySelector('#post-desc').value.trim();

    if (title && description) {
        const response = await fetch(`/api/posts`, {
            method: 'POST',
            body: JSON.stringify({ name, description }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to create post');
        }
    }
};


// // Edit Post Button Handler
// const editButtonHandler = async (event) => {
//     event.preventDefault();

//     const post = document.querySelector()
//     if (event.target.hasAttribute('data-id')) {
//         const id = event.target.getAttribute('data-id');

//         const response = await fetch(`/api/posts/${id}`, {
//             method: 'PUT',
//         });

//         if (response.ok ) {
//             document.location.replace('profile');
//         } else {
//             alert('Failed to update project');
//         }
//     }
// };


// Delete Post Button Handler 
const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/posts/${id}`, {
            method: 'DELETE',
        });

        if ( response.ok ) {
            document.location.replace('/profile');
        } else {
            alert('Failed to delete project');
        }
    }
};


// 
document
    .querySelector('.new-post-form')
    .addEventListener('submit', newFormHandler);

document
    .querySelector('.post-list')
    .addEventListener('click', delButtonHandler);

// editForm
//     .addEventListener('sumbit', editButtonHandler);