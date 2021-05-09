window.addEventListener("DOMContentLoaded", (e) => {
    const scrollFunction = () =>{

        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
            console.log("I'm at the bottom of the page");
        }
        if (document.body.scrollTop > 88 || document.documentElement.scrollTop > 88) {
            document.querySelector(".logo").classList.add("resizeLogo");
            document.querySelector(".header").classList.add("resizeHeader");
            document.querySelector(".nav").classList.add("resizeNav");
        } else if (document.body.scrollTop < 88 || document.documentElement.scrollTop < 88) {
            document.querySelector(".logo").classList.remove("resizeLogo");
            document.querySelector(".header").classList.remove("resizeHeader");
            document.querySelector(".nav").classList.remove("resizeNav");
        } ;


    };
    window.onscroll = function() {scrollFunction()};
});
