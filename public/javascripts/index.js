window.addEventListener("load", (event)=>{
    console.log("hello from javascript!")
    //===================  Heart Button ===============================================
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
    //=================== End Heart Button ============================================

    const homestories = async () => {
        const homestories = await fetch('/homepage-stories');
        const json = await homestories.json();
        const storyContainer = document.querySelector('.storiesColumn--container')


        for(let i = 0; i < json.length; i++){
         console.log(json[i].Pixel_User.about)

         let story = document.createElement('div');
         story.setAttribute("class", "story--container");
         story.innerHTML = `

         <a href="/stories/${json[i].id}">
             <div class="story--text">
                 <div class="title_category">
                     <div class="category">${json[i].Pixel_Category.name}</div>
                     <div class="title">${json[i].title}<div class="author">${json[i].Pixel_User.username}</div></div>
                 </div>

                 <div class="summary">${json[i].summary}</div>
            </div>
             <div class="storyThumbnail--container">
                 <div class="storyThumbnail" style="background-image: url(${json[i].imageUrl})">
            </div></a>
          </div>
        `
        storyContainer.appendChild(story)
        }

        return json
    };


    homestories()


})
