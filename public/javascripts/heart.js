window.addEventListener("load", (event) => {
    //===================  Heart Button ===============================================
    let pixelHeartContainer = document.getElementById("heart_container");
    let pixelHeart = document.getElementById("pixel__heart");
    let pixelHeartShadow = document.getElementById("pixelHeart-shadow");
    let isHearted = false;
    console.log('Is this working?');
    function checkHeart() {
        if (isHearted) {
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
        fetch('stories/:id(\\d+)/likes', { method: 'POST' })
            .then((res) => {
                if (res.ok) {
                    console.log('Story liked!');
                    if (isHearted) {
                        isHearted = false;
                    } else {
                        isHearted = true;
                    }
                    checkHeart();
                    return;
                }
                throw new Error('Error: Story Like could not be processed.');
            })
            .catch((error) => {
                console.log(error);
            });

        checkHeart();
    })

    const heartInit = () => isHearted ? checkHeart() : console.log('not hearted')
    heartInit();

});
