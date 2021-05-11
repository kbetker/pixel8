document.addEventListener("DOMContentLoaded", ()=> {
    let commentInput = document.querySelector('.comment--inputContainer ');
    let newCommentBtn = document.getElementById('newCommentBtn');
    let mustLogin = document.getElementById('newCommentLogIn');
    let heartLogInBtn = document.getElementById('heartLogIn');
    let noSelfCommentBtn = document.getElementById("noSelfCommentBtn");
    let noSelfHeart = document.getElementById("noSelfHeart");
    let commentClicked = false;

             if(newCommentBtn !== null){
                newCommentBtn.addEventListener("click", async (e)=>{

                        if(!commentClicked){
                            commentInput.classList.add("commentInput--resize")
                            newCommentBtn.innerText = "-"
                            commentClicked = true;
                        } else {
                            commentInput.classList.remove("commentInput--resize")
                            newCommentBtn.innerText = "+"
                            commentClicked = false
                        }
                 })
             }

             if(noSelfHeart !== null){
                noSelfHeart.addEventListener("click", (e)=>{
                    alert("You cannot like your own page. I mean, you can, but you just can't add this heart count on our database")
                })
            }

             if(noSelfCommentBtn !== null){
                noSelfCommentBtn.addEventListener("click", (e)=>{
                    alert("You cannot comment on your own page")
                })
            }

            if(mustLogin !== null){
                mustLogin.addEventListener("click", (e)=>{
                    alert("You must be logged in to comment on this page")
                })
            }

            if(heartLogInBtn !== null){
                heartLogInBtn.addEventListener("click", (e)=>{
                    alert("You must be logged in to like this page")
                })
            }

});
