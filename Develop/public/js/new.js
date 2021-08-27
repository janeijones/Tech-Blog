const postFormHandler = async function(e){
    e.preventDefault();

    const postTitle = document.querySelector('input[name="post-title"]').value;
    const postBody = document.querySelector('textarea[name="post-body"]').value;

    await fetch('/api/post', {
        method: 'POST',
        body: JSON.stringify({
            title: postTitle.value,
            body: postBody.value,
        }),
        headers: { 'Content-Type': 'application/json' },
    })
    document.location.replace('/dashboard')
}

document.querySelector('#new-post-form').addEventListener('submit', postFormHandler);