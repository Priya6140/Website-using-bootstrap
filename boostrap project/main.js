let navBar = document.querySelector(".navigation-wrap");
let menuBtn = document.querySelector(".navbar-toggler");
let cancelBtn = document.querySelector(".cancel-btn")
let navCollapse = document.querySelector(".navbar-collapse")
window.onscroll = function (){
    if(document.documentElement.scrollTop>20){
        navBar.classList.add("scroll-on");
    }else{
        navBar.classList.remove("scroll-on");
    }
}
let logoOne = document.querySelector("navbar-brand");
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar-collapse.collapse");
{
    navBar.forEach(function (a){
        a.addEventListener("click",function (){
            navCollapse .classList.remove("show");
        })
        }
    )

}
//scroll fixed
menuBtn.onclick = function(){
    navBar.classList.add("active");
    menuBtn.style.opacity ="0"
    menuBtn.style.pointerEvents = "none";
    body.style.overflow = "hidden";
}
cancelBtn.onclick = function(){
    navBar.classList.remove("active");
    menuBtn.style.opacity ="1";
    menuBtn.style.pointerEvents = "auto";
    body.style.overflow = "auto";
}
let navlinks = document.querySelectorAll(".menu li a");
for(var i = 0; i< navlinks.length; i++){
    navlinks[i].addEventListener("click", function(){
        navBar.classList.remove("active");
        menuBtn.style.opacity = "1";
        menuBtn.style.pointerEvents = "auto";
        body.style.overflow = "auto";
    })
}

window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        navBar.classList.add("sticky");
        logoOne.classList.add("active");
        menuBtn.classList.add("active");
    }else{
        navBar.classList.remove("sticky");
        logoOne.classList.remove("active");
        menuBtn.classList.remove("active");
    }
}


