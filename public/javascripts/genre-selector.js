window.addEventListener("DOMContentLoaded", () => {

    //===================  Genre Selector =================================================
    let genreSelect = document.getElementById("genre_select")

    let genreInput = document.getElementById("genre")
    const genreValueChange = (e) => genreInput.value = e;


    genreSelect.addEventListener("change", (e) => {
    let subGenre =  document.getElementById(e.target.value);
    let selectors = document.querySelectorAll('.sub');
    selectors.forEach((e) => { e.classList.add("sub--hidden") });
    subGenre.classList.remove("sub--hidden");
    genreInput.value = subGenre
    subGenre.addEventListener("change", (e) => genreValueChange(e.target.value))
});
});
