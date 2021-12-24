// NEW POST FORM HANDLER
let post_id;
const newFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-desc').value.trim();

    // MUST HAVE TITLE AND CONTENT TO CREATE POST
    if (title && content) {
        const response = await fetch(`/api/post`, {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // IF POST REQUIREMENTS MET, CREATE POST AND RELOAD THE DASHBOARD
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create post');
        }
    }
};


// EDIT POST FORM HANDLER
// const editButtonHandler = async (event) => {
//     event.preventDefault();

//     // const post = document.querySelector()
//     if (event.target.hasAttribute('data-id')) {
//         const id = event.target.getAttribute('data-id');

//         const title = document.querySelector('#post-title').value.trim();
//         const content = document.querySelector('#post-desc').value.trim();

//         const response = await fetch(`/api/post/${id}`, {
//             method: 'PUT',
//             body: JSON.stringify({ title, content }),
//             headers: {
//                 'Content-Type': 'application/json',
//             }
//         });
// console.log(response);
//         if (response.ok ) {
//             // document.location.replace('profile');
//         } else {
//             alert('Failed to update project');
//         }
//     }
// };


// DELETE POST FORM HANDLER
const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/post/${id}`, {
            method: 'DELETE',
        });

        // IF RESPONSE IS OK, RELOAD DASHBOARD WITH POST DELETED
        if ( response.ok ) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete post!');
        }
    }
};


// EVENT LISTENER FOR 'CREATE!' BUTTON
document
    .querySelector('.new-post-form')
    .addEventListener('submit', newFormHandler);

// EVENT LISTENER FOR 'DELETE' BUTTON
document
    .querySelector('.post-list')
    .addEventListener('click', delButtonHandler);

// EVENT LISTENER FOR EDIT BUTTON (NOT WORKING CURRENTLY)
// document
//     .querySelector('.editBtn')
//     .addEventListener('click', editButtonHandler);