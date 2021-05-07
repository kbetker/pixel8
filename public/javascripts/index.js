window.addEventListener("load", (event)=>{
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



    // const storyContainer = document.querySelector('.storiesColumn--container')
    const storiesColumn = document.querySelector('.storiesColumn--container')
     //=================== Fill in the stories ========================================

    async function fillInStories(array) {
     for(let i = 0; i < array.length; i++){
      let story = document.createElement('div');
      story.setAttribute("class", "story--container");
      story.innerHTML = `

              <a href="/stories/${array[i].id}">
                  <div class="story--text">
                      <div class="title_category">
                          <div class="category">${array[i].Pixel_Category.name}</div>
                          <div class="title">${array[i].title}<div class="author">${array[i].Pixel_User.username}</div></div>
                      </div>

                      <div class="summary">${array[i].genre}</div>
                 </div>
                  <div class="storyThumbnail--container">
                      <div class="storyThumbnail" style="background-image: url(${array[i].imageUrl})">
                 </div></a>
               </div>
             `
     storiesColumn.appendChild(story)
     }
     await storiesFadeIn()
    }

    //=================== Fill in Trending ========================================
    const trendingContainer = document.querySelector('.trending-element-container')
    const trending = async () => {
        const trendFetch = await fetch('/stories/trending');
        const trending = await trendFetch.json();
        let sortedList = []
        console.log("sortThisArray")

        for(let i = 0; i < trending.length; i++){
            let title = trending[i].title
            let likes = trending[i].Pixel_Likes.length
            let imageUrl = trending[i].imageUrl
            let id = trending[i].id
            sortedList.push({"title": title, "likes": likes, "imageUrl": imageUrl, "id": id})
        }
        sortedList.sort((a,b) => (a.likes > b.likes) ? -1 : 1)

        for(let i = 0; i < 5; i++){
              let title = sortedList[i].title
              let likes = sortedList[i].likes
              let imageUrl = sortedList[i].imageUrl
              let id = sortedList[i].id
            let trendingStory = document.createElement('div');
            trendingStory.innerHTML = `
            <a href="/stories/${id}">
            <div class="trending--element" style="background-image: url('${imageUrl}')">
                 <div class="number">${i + 1}</div>
                 <div class="trending--title">${title}</div>
                 <div class="trending--like">${likes}</div>
                 <img src="../images/trendingStoriesOverlay.png" class="trending--overlay" >
                 <img src="../images/heartColor23x23.png" class="trending--heart">
            </div>  </a>   `
            trendingContainer.appendChild(trendingStory)

        }
    };


    //=================== Main page stories ===========================================
    const homestories = async () => {
        const homestories = await fetch('/homepage-stories');
        const json = await homestories.json();
        fillInStories(json)
    };

    //=================== Genre selected page stories =================================

    const discoverLink = document.querySelectorAll('.discoverMoreLinks')


    for(let i = 0; i < discoverLink.length; i++){
        discoverLink[i].addEventListener("click", async (e) => {
            let id = e.target.id
            await storiesFadeOut();
            storiesColumn.innerHTML = '';
            const storiesByGenre = await fetch(`/storiesByGenre/${id}`);
            const json = await storiesByGenre.json();
            fillInStories(json)

        });
    };




    //=================== Fade in/out effect ==============================================
    async function storiesFadeIn(){
        const storyContainer = document.querySelectorAll('.story--container')
        const removeOpacity = (i) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    storyContainer[i].style.opacity = "1"
                    resolve();
                }, 100);
            });
        }
        for(let i = 0; i < storyContainer.length; i++){
            await removeOpacity(i);
        }
    }

    async function storiesFadeOut(){
        const storyContainer = document.querySelectorAll('.story--container')
        const addOpacity = (i) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    storyContainer[i].style.opacity = "0"
                    resolve();
                }, 100);
            });
        }
        for(let i = 0; i < storyContainer.length; i++){
            await addOpacity(i);
        }
    }




    trending()
    homestories()
    // .then((e) => {
    //     storiesFadeIn()

    // })

})
