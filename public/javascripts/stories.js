document.addEventListener("DOMContentLoaded", ()=> {
    // window.addEventListener("click", (e)=> {
        // console.log(e.target)


             let newCommentBtn = document.getElementById('newCommentBtn');
             console.log("WTFWTFWTFW", newCommentBtn)
             if(newCommentBtn !== null){
                 newCommentBtn.addEventListener("click", (e)=>{
                    console.log("you must be logged in to coment")
                })
            }


            let mustLogin = document.getElementById('newCommentLogIn');

            if(mustLogin !== null){
            mustLogin.addEventListener("click", (e)=>{
                alert("You must be logged in to like this page")
            })
            }

            let heartLogInBtn = document.getElementById('heartLogIn');
            if(heartLogInBtn !== null){
            heartLogInBtn.addEventListener("click", (e)=>{
                alert("You must be logged in to like this page")
            })
        }
// })

})
