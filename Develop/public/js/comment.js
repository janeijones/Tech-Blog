const commentFormHandler = async function(e) {
    e.preventDefault();

    const postId = document.querySelector('input[name = "post-id"]').value;
    const body = document.querySelector('textarea[name="comment-body"]').value;

}