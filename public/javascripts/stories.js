document.addEventListener("DOMContentLoaded", ()=> {
    let commentInput = document.querySelector('.comment--inputContainer ');
    let newCommentBtn = document.getElementById('newCommentBtn');
    let mustLogin = document.getElementById('newCommentLogIn');
    let heartLogInBtn = document.getElementById('heartLogIn');


             if(newCommentBtn !== null){
                newCommentBtn.addEventListener("click", async (e)=>{
                    commentInput.classList.add("commentInput--resize")
                    newCommentBtn.innerText = "-"

                 })
             }

            if(mustLogin !== null){
                mustLogin.addEventListener("click", (e)=>{
                    alert("You must be logged in to like this page")
                })
            }

            if(heartLogInBtn !== null){
                heartLogInBtn.addEventListener("click", (e)=>{
                    alert("You must be logged in to like this page")
                })
            }

});
