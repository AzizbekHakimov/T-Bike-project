'use strict'
//==========================//
// To show brands one by one//
//==========================//
const brands = document.querySelector(".name-of-brands")
const firstBrand = document.querySelector(".first-brand-name");
const secondBrand = document.querySelector(".second-brand-name");
const firstBrandDiv = document.querySelector(".first-brand");
const secondBrandDiv = document.querySelector(".second-brand");
const logo = document.querySelector(".logo");
const loginPage = document.querySelector(".login");

brands.addEventListener("click",(e)=>{
    if(e.target.classList.contains("first-brand-name")){    
        firstBrandDiv.style.transform = "translateX(0)"
        secondBrandDiv.style.transform = "translateX(0)"
        firstBrand.style.color = "black"
        secondBrand.style.color = "rgb(126,141,170)"
    }
    if(e.target.classList.contains("second-brand-name")){
        secondBrandDiv.style.transform = "translateX(-123%)"
        firstBrandDiv.style.transform = "translateX(-123%)"
        firstBrand.style.color = "rgb(126,141,170)"
        secondBrand.style.color = "black"
    }

})
//==========================//
// To show videos while clicking to descriptions//
//==========================//

const activeVideo = document.querySelector(".active-video");
const procceses = document.querySelectorAll(".desc-block");
const headingText = document.querySelectorAll(".heading-text");

const removeStyle = ()=>{
    headingText.forEach(el=>{
        el.classList.remove("blue-color");
    })
    procceses.forEach(el=>{
        el.classList.remove("shadow")
    })
}
procceses.forEach((e,i)=>{
    e.addEventListener("click", event=>{
        if(e.classList.contains("downloading")){
            activeVideo.src = "videos/download.mp4"
            removeStyle();
            headingText[i].classList.add("blue-color");
            e.classList.add("shadow")
        }
        if(e.classList.contains("locate")){
            activeVideo.src = "videos/locate.mp4"
            removeStyle();
            headingText[i].classList.add("blue-color");
            e.classList.add("shadow")
        }
        if(e.classList.contains("scan")){
            activeVideo.src = "videos/scan.mp4"
            removeStyle();
            headingText[i].classList.add("blue-color");
            e.classList.add("shadow")
        }        
        if(e.classList.contains("ride")){
            activeVideo.src = "videos/ride.mp4"
            removeStyle();
            headingText[i].classList.add("blue-color");
            e.classList.add("shadow")
        
        }if(e.classList.contains("end")){
            activeVideo.src = "videos/end.mp4"
            removeStyle();
            headingText[i].classList.add("blue-color");
            e.classList.add("shadow")
        }
    })
})
//==========================//
// To show video on header page//
//==========================//

const showBtn = document.querySelector(".watch-btn");
const headerVideo = document.querySelector(".header-video");
const headerVid = document.querySelector(".header-vid");
const signUpSection = document.querySelector(".sign-up-sec")

document.addEventListener("click",e =>{
    if(e.target.classList.contains("watch-btn")){
        scrollToTop();
        headerVideo.style.display = 'block';
     headerVid.style.display = 'block';
     document.body.style.overflow = "hidden";

}
    if(headerVid.style.display == 'block'&& 
    !e.target.classList.contains("watch-btn") &&!e.target.classList.contains("header-vid")
    )
    {   
        headerVid.pause();
        headerVid.currentTime = 0;
        headerVideo.style.display = 'none';
        headerVid.style.display = 'none';
        document.body.style.overflow = "visible";
        
    }
    //==========================//
//  Login and sign up page//
//==========================//
    if(e.target.classList.contains("sign-up")){
        headerVideo.style.display = 'block';
        signUpSection.style.display = "flex";
        document.body.style.overflow = "hidden";
        scrollToTop();
    }
    if(signUpSection.style.display == 'flex'&& 
    !e.target.classList.contains("sign-up") &&!e.target.closest(".sign-up-bg")
    )
    {   
        headerVideo.style.display = 'none';
        signUpSection.style.display = 'none';
        document.body.style.overflow = "visible";
        
    }
    if(e.target.classList.contains("log-in")){
        headerVideo.style.display = 'block';
        loginPage.style.display = "flex";
        document.body.style.overflow = "hidden";
        scrollToTop();
    }
    if(loginPage.style.display == 'flex'&& 
    !e.target.classList.contains("log-in") &&!e.target.closest(".login")
    )
    {   
        headerVideo.style.display = 'none';
        loginPage.style.display = 'none';
        document.body.style.overflow = "visible";
        
    }
})
const scrollToTop = ()=>{
    window.scrollTo({
        left: 0,
      top: 0,
      behavior: "smooth",
    })
}
//==========================//
//  Scroll To top//
//==========================//
logo.addEventListener("click", scrollToTop)


const signUpBtn = document.querySelector(".sign-up-btn");
const nameInput = document.querySelector(".sp-name");
const lastNameInput = document.querySelector(".sp-surname");
const username = document.querySelector(".username");
const password = document.querySelector(".sp-password");
const loginBtn = document.querySelector(".login-subscribe");
const usernameMain = document.querySelector(".user");
const passwordMain = document.querySelector(".parol");

const usersData = [];
const Person = function (firstName, lastName, username, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.password = password;
  };
const clearInput =(input)=>{
    input.value ="";
}
signUpBtn.addEventListener("click",()=>{
    if(!nameInput.value||!lastNameInput.value||!username.value||!password.value) return;

    const person = new Person(nameInput.value, lastNameInput.value, username.value,password.value);
    usersData.push(person)
    clearInput(nameInput);
    clearInput(lastNameInput);
    clearInput(username);
    clearInput(password);
    signUpSection.style.display = 'none';
    console.log(usersData);
})
loginBtn.addEventListener("click",()=>{
    if(!passwordMain.value||!usernameMain.value) return;
    usersData.forEach(e=>{
        if(e.username===usernameMain&&e.password===passwordMain){
            window.open('login-page.html');
        }
    })
    clearInput(usernameMain);
    clearInput(passwordMain);
    loginPage.style.display = 'none';
    console.log(usersData);
})
