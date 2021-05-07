window.addEventListener("DOMContentLoaded", () => {
    const userLoginForm = document.getElementById("userLoginForm")
    const demoBtn = document.getElementById("demo-btn")
    const username = document.getElementById("username")
    const password = document.getElementById("password")


    demoBtn.addEventListener("click", async (e) => {
        e.preventDefault();
        username.value = "demomcdemiface"
        password.value = "password"
        userLoginForm.submit()
    })

})
