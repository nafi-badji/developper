// Header Scroll

let nav = document.querySelector(".navbar");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("header-scrolled");
  } else {
    nav.classList.remove("header-scrolled");
  }
};

// nav hide
let navbar = document.querySelectorAll(".navbar");
let navcollapse = document.querySelector(".navbar-collapse.collapse");
navbar.forEach(function(a){
     a.addEventListener("clik", function(){
        navcollapse.classList.remove("show");
     })

})