window.addEventListener("DOMContentLoaded", () => {
    const userSignupForm = document.getElementById("demo-form")
    const demoBtn = document.getElementById("demo-btn")
    const username = document.getElementById("username")
    const password = document.getElementById("password")


    demoBtn.addEventListener("click", async (e) => {
        e.preventDefault();
        username.value = "demomcdemiface"
        password.value = "password"
        userSignupForm.submit()
    })

})
