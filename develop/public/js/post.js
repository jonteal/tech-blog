// New Post Form Handler

let post_id;
const newFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-desc').value.trim();

    if (title && content) {
        const response = await fetch(`/api/post`, {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
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

        const response = await fetch(`/api/post/${id}`, {
            method: 'DELETE',
        });

        if ( response.ok ) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete post!');
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

