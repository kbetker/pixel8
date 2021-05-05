window.addEventListener("DOMContentLoaded", () => {
    let pixelHeartContainer = document.getElementById("heart_container");
    let pixelHeart =  document.getElementById("pixel__heart");
    let pixelHeartShadow = document.getElementById("pixelHeart-shadow");
    let isHearted = false;

    function checkHeart(){
        if(isHearted){
            pixelHeart.classList.remove("pixel__heart-slideout");
            pixelHeart.classList.add("pixel__heart-slidein")
            pixelHeartShadow.classList.add("pixelHeart-shadow")
        } else {
            pixelHeart.classList.add("pixel__heart-slideout");
            pixelHeart.classList.remove("pixel__heart-slidein")
            pixelHeartShadow.classList.remove("pixelHeart-shadow")
        }
    }
    pixelHeartContainer.addEventListener("click", event => {
        isHearted ? isHearted = false : isHearted = true;
        checkHeart();
    })
    const heartInit = () => isHearted ? checkHeart() : console.log('not hearted')
    heartInit();



let genreSelect = document.getElementById("genre_select")
genreSelect.addEventListener("change", (e) =>{
    let subGenre =  document.getElementById(e.target.value);
    let selectors = document.querySelectorAll('.sub');
    selectors.forEach((e) => { e.classList.add("sub--hidden") });
    subGenre.classList.remove("sub--hidden");
});



})
