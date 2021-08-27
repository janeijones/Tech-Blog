const postId = document.querySelector('#post-id').value;
const btnDelete = document.querySelector('#btnDelete');

const editFormHandler = async function(e){
    e.preventDefault()

    const postTitle = document.querySelector("#post-title"); 
    const postBody = document.querySelector("#post-body");

    await fetch(`/api/post/${postId}`, { //sends post
        method: 'PUT',
        body: JSON.stringify({
            title: postTitle.value,
            body: postBody.value,
        }),
        headers: { 'Content-Type': 'application/json' },
    })
    document.location.replace('/dashboard')
};

const deletePostHandler = async function() {
    await fetch(`/api/post/${postId}`, {
        method: 'DELETE'
    })
    document.location.replace('/dashboard')
}
document.querySelector('#edit-post-form').addEventListener('submit', editFormHandler)

btnDelete.addEventListener('click', deletePostHandler);