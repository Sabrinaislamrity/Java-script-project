
document.getElementById('complete_comment').addEventListener('click', function(event){
    event.preventDefault()
if(confirm("Board update successfully")){
    

    const paragraph = document.createElement("p");
    paragraph.className = "comment";
    paragraph.innerText = "You have completed the task Fix Mobile Button Issue at" + new Date().toLocaleTimeString();

const commentBox = document.getElementById('comment_box');
    commentBox.appendChild(paragraph)

    const completeComment = document.getElementById('complete_comment')
    completeComment.disabled = true;
    completeComment.innerText = "Completed";


    const reduseNumber = document.getElementById('reduse_number')
   let currentNumber = parseInt(reduseNumber.innerText);
   if (currentNumber > 0) {
    reduseNumber.innerText = currentNumber - 1;
    
   } ;

   const addNumber = document.getElementById('add_number')
   let recentNumber = parseInt(addNumber.innerText);
    addNumber.innerText = recentNumber + 1;
    
    

}

}) ;


document.getElementById('frist_complete_comment').addEventListener('click', function(event){
    event.preventDefault()
if(confirm("Board update successfully")){
    

    const paragraph = document.createElement("p");
    paragraph.className = "comment";
    paragraph.innerText = "You have completed the task Add Dark Mode at" + new Date().toLocaleTimeString();



const commentBox = document.getElementById('comment_box');
    commentBox.appendChild(paragraph);

    
    const completeComment = document.getElementById('frist_complete_comment');
    completeComment.disabled = true;
    completeComment.innerText = "Completed";


    const reduseNumber = document.getElementById('reduse_number')
   let currentNumber = parseInt(reduseNumber.innerText);
   if (currentNumber > 0) {
    reduseNumber.innerText = currentNumber - 1
    
   } ;

   const addNumber = document.getElementById('add_number')
   let recentNumber = parseInt(addNumber.innerText);
    addNumber.innerText = recentNumber + 1
    
 

}

}) ;


document.getElementById('second_complete_comment').addEventListener('click', function(event){
    event.preventDefault()
if(confirm("Board update successfully")){
    

    const paragraph = document.createElement("p");
    paragraph.className = "comment";
    paragraph.innerText = "You have completed the task Optimize  Home page  at" + new Date().toLocaleTimeString();



const commentBox = document.getElementById('comment_box');
    commentBox.appendChild(paragraph);

    
    const completeComment = document.getElementById('second_complete_comment');
    completeComment.disabled = true;
    completeComment.innerText = "Completed";


    const reduseNumber = document.getElementById('reduse_number')
   let currentNumber = parseInt(reduseNumber.innerText);
   if (currentNumber > 0) {
    reduseNumber.innerText = currentNumber - 1
    
   } ;

   const addNumber = document.getElementById('add_number')
   let recentNumber = parseInt(addNumber.innerText);
    addNumber.innerText = recentNumber + 1
    
 

}

}) ;


document.getElementById('third_complete_comment').addEventListener('click', function(event){
    event.preventDefault()
if(confirm("Board update successfully")){
    

    const paragraph = document.createElement("p");
    paragraph.className = "comment";
    paragraph.innerText = "You have completed the task Add new emoji 🤲  at" + new Date().toLocaleTimeString();



const commentBox = document.getElementById('comment_box');
    commentBox.appendChild(paragraph);

    
    const completeComment = document.getElementById('third_complete_comment');
    completeComment.disabled = true;
    completeComment.innerText = "Completed";


    const reduseNumber = document.getElementById('reduse_number')
   let currentNumber = parseInt(reduseNumber.innerText);
   if (currentNumber > 0) {
    reduseNumber.innerText = currentNumber - 1
    
   } ;

   const addNumber = document.getElementById('add_number')
   let recentNumber = parseInt(addNumber.innerText);
    addNumber.innerText = recentNumber + 1
    
 

}

}) ;



document.getElementById('forth_complete_comment').addEventListener('click', function(event){
    event.preventDefault()
if(confirm("Board update successfully")){
    

    const paragraph = document.createElement("p");
    paragraph.className = "comment";
    paragraph.innerText = "You have completed the task Integrate OpenAI API  at" + new Date().toLocaleTimeString();



const commentBox = document.getElementById('comment_box');
    commentBox.appendChild(paragraph);

    
    const completeComment = document.getElementById('forth_complete_comment');
    completeComment.disabled = true;
    completeComment.innerText = "Completed";


    const reduseNumber = document.getElementById('reduse_number')
   let currentNumber = parseInt(reduseNumber.innerText);
   if (currentNumber > 0) {
    reduseNumber.innerText = currentNumber - 1
    
   } ;

   const addNumber = document.getElementById('add_number')
   let recentNumber = parseInt(addNumber.innerText);
    addNumber.innerText = recentNumber + 1
    
 

}

}) ;


document.getElementById('five_complete_comment').addEventListener('click', function(event){
    event.preventDefault()
if(confirm("Board update successfully")){
    

if (confirm("congrates!! You have completed all the current task")) {
    const paragraph = document.createElement("p");
    paragraph.className = "comment";
    paragraph.innerText = "You have completed the task Improve Job searching at" + new Date().toLocaleTimeString();



const commentBox = document.getElementById('comment_box');
    commentBox.appendChild(paragraph);

    
    const completeComment = document.getElementById('five_complete_comment');
    completeComment.disabled = true;
    completeComment.innerText = "Completed";


    const reduseNumber = document.getElementById('reduse_number')
   let currentNumber = parseInt(reduseNumber.innerText);
   if (currentNumber > 0) {
    reduseNumber.innerText = currentNumber - 1
    
   } ;

   const addNumber = document.getElementById('add_number')
   let recentNumber = parseInt(addNumber.innerText);
    addNumber.innerText = recentNumber + 1
}
    
 

}

}) ;





document.getElementById('clear_history').addEventListener('click', function(){
   
    const commentBox = document.getElementById('comment_box');
    const comments = commentBox.getElementsByClassName('comment');
    
   
    for (let i = 0; i < comments.length; i++) {
        comments[i].style.display = "none";
    }

    const completeTask = document.getElementById('complete_box');
    completeTask.innerHTML = '<h2 class="text-lg font-semibold"><i class="fa-solid fa-clock mr-2"></i>Activity Log</h2><button id="clear_history" class="btn bg-[#3752FD] text-white mt-2">Clear History</button>';
});





// Disable all buttons except the first one
// document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById("frist_complete_comment").disabled = true;
//     document.getElementById("second_complete_comment").disabled = true;
//     document.getElementById("third_complete_comment").disabled = true;
//     document.getElementById("forth_complete_comment").disabled = true;
//     document.getElementById("five_complete_comment").disabled = true;
// });

// function enableNextButton(currentButtonId, nextButtonId) {
//     document.getElementById(currentButtonId).addEventListener("click", function() {
//         document.getElementById(nextButtonId).disabled = false;
//     });
// }

// // Event listeners for enabling the next button in sequence
// enableNextButton("complete_comment", "frist_complete_comment");
// enableNextButton("frist_complete_comment", "second_complete_comment");
// enableNextButton("second_complete_comment", "third_complete_comment");
// enableNextButton("third_complete_comment", "forth_complete_comment");
// enableNextButton("forth_complete_comment", "five_complete_comment");






