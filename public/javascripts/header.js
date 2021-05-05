document.addEventListener("DOMContentLoaded", () => {
    const scrollFunction = () =>{
        if (document.body.scrollTop > 121 || document.documentElement.scrollTop > 121) {
            document.querySelector(".logo").classList.add("resizeLogo");
            document.querySelector(".header").classList.add("resizeHeader");
            document.querySelector(".nav").classList.add("resizeNav");
        } else if (document.body.scrollTop < 121 || document.documentElement.scrollTop < 121) {
            document.querySelector(".logo").classList.remove("resizeLogo");
            document.querySelector(".header").classList.remove("resizeHeader");
            document.querySelector(".nav").classList.remove("resizeNav");
        } ;
    };
    window.onscroll = function() {scrollFunction()};
});
