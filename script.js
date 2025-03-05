// Menu Bar //

const body = document.querySelector("body"),
      nav  = document.querySelector("nav"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      sidebarClose = document.querySelector(".sidebarClose")



      // js code to toggle sidebar

      sidebarOpen.addEventListener("click", () => {
        nav.classList.add("active");
      })

      body.addEventListener("click" , e => {
        let clickedElm = e.target;

        if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
            nav.classList.remove("active");
        }
      })


// Menu Bar //

// Gallery Section //

const galleryItem = document.getElementsByClassName("gallery-item");
//create element for lightbox
const lightBoxContainer = document.createElement("div");
//for basic area
const lightBoxContent = document.createElement("div");
//for images
const lightBoxImg = document.createElement("img");
//for prev button to change images
const lightBoxPrev = document.createElement("div");
// for next button to change images
const lightBoxNext = document.createElement("div")


//create classlist

lightBoxContainer.classList.add('lightbox');
lightBoxContent.classList.add('lightbox-content');
lightBoxPrev.classList.add("fa","fa-angle-left", "lightbox-prev");
lightBoxNext.classList.add("fa","fa-angle-right","lightbox-next");

lightBoxContainer.appendChild(lightBoxContent);
lightBoxContent.appendChild(lightBoxImg);
lightBoxContent.appendChild(lightBoxPrev);
lightBoxContent.appendChild(lightBoxNext);
document.body.appendChild(lightBoxContainer);


let index = 1

//create function

function showLightBox(n) {
    if (n > galleryItem,length) {
        index = 1;
    } else if(n < 1){
        index - galleryItem.length;
    }

    let imageLocation = galleryItem[index-1].children[0].getAttribute("src");
    lightBoxImg.setAttribute("src", imageLocation)
}

function currentImage(){
    lightBoxContainer.style.display="block";

    let imageIndex = parseInt(this.getAttribute("data-index"));
    showLightBox(index = imageIndex);
}

for (let i = 0; i<galleryItem.length; i++){
    galleryItem[i].addEventListener("click", currentImage);
}

function sliderImage(n){
    showLightBox(index += n);
}

function prevImage(){
    sliderImage(-1);
}

function nextImage(){
    sliderImage(1);
}

lightBoxPrev.addEventListener("click", prevImage);
lightBoxNext.addEventListener("click", nextImage);

//close lightbox

function closeLightBox(){
    if(this == event.target){
        lightBoxContainer.style.display = "none";
    }
}

lightBoxContainer.addEventListener("click", closeLightBox); 

// Gallery Section //

// Blog Section //

//const likeButtons = document.querySelectorAll('.like-btn');
//const dislikeButtons = document.querySelectorAll('.dislike-btn');

//const cardId = 1; // Replace with unique identifier for each card (e.g., database ID)

//likeButtons.forEach(button => {
  //button.addEventListener('click', () => {
    //const likeCountSpan = button.querySelector('.like-count');
    //updateCount(button, likeCountSpan);
 // });
//});

//dislikeButtons.forEach(button => {
  //button.addEventListener('click', () => {
    //const dislikeCountSpan = button.querySelector('.dislike-count');
    //updateCount(button, dislikeCountSpan);
  //});
//});

// Blog Section //

//pop up//

let subup = document.getElementById("subup");

function openPopup() {
  subup.classList.add("open-newsletter-sub");
}

function closePopup() {
  subup.classList.remove("open-newsletter-sub");
}


