document.getElementById('complete_comment').addEventListener('click', function(){
if(confirm("Are you sure you want to complete this task?")){
    // const innerComment = document.getElementById('inner_comment');

    const paragraph = document.createElement("p");
    paragraph.className = "comment";
    paragraph.innerText = "You have completed the task Fix Mobile Button Issue at 1:26:53 AM"
const commentBox = document.getElementById('comment_box');
    commentBox.appendChild(paragraph)
    const completeComment = document.getElementById('complete_comment')
    completeComment.disabled = true;
    completeComment.innerText = "Completed";

}
})







