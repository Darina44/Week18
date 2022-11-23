let comments = [];
let button = document.getElementById('button');
let result = document.getElementById('comments-result');

button.onclick = checkSpam;

function checkSpam() {
    let newComment = document.getElementById('newcomment').value;
    let commentRegister = newComment.toLowerCase();
    let spam1 = /viagra/g;
    let spam2 = /XXX/gi;
    let commentSpam = commentRegister.replace(spam1, '***');
    let commentFinal = commentSpam.replace(spam2, '***');
    comments.push(commentFinal);
    generateComments();
    document.getElementById('newcomment').value = '';
}



function generateComments() {
    let commentsResult = '';
    let author = document.getElementById("author").value;
    for (let comment of comments){
        commentsResult += `<div>${author}: ${comment}</div>`;
    }
    result.innerHTML = commentsResult;
    if (localStorage.getItem('name') == null) {
        localStorage.setItem('name', author);
    }
}

document.addEventListener('DOMContentLoaded',
function () {
    generateComments();
    let name = localStorage.getItem('name');
    if (name != null) {
        document.getElementById("author").value = name;
    }
});