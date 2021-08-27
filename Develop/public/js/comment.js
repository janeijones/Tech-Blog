const commentFormHandler = async function(e) {
    e.preventDefault();

    const postId = document.querySelector('input[name = "post-id"]').value; //grabbing data from form to associate which post to comment on
    const body = document.querySelector('textarea[name="comment-body"]').value; //grabbing text area comment from user

    if(body) { //adds comment to posts
        await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({
                postId,
                body
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        document.location.reload();
    }

};

document.querySelector('#new-comment-form').addEventListener('submit', commentFormHandler); //event listener for submitted comment form
    