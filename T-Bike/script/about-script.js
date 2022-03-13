'use strict'

//==================================//
// To show video on ABOUT-tBIKE page//
//==================================//

const showAboutBike = document.querySelector(".player");
const aboutVideo = document.querySelector(".about-video");
const aboutVid = document.querySelector(".about-vid");


document.addEventListener("click",e =>{
    if(e.target.classList.contains("player")){
        aboutVideo.style.display = 'block';
        aboutVid.style.display = 'block';
        document.body.style.overflow = "hidden";
}

    if(aboutVid.style.display == 'block'&& 
    !e.target.classList.contains("player") &&!e.target.classList.contains("about-vid")
    )
    {   
        aboutVid.pause();
        aboutVid.currentTime = 0;
        aboutVideo.style.display = 'none';
        aboutVid.style.display = 'none';
        document.body.style.overflow = "visible";
        
    }
})