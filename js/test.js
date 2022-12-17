// *sticky navbar
window.addEventListener("scroll", function(){
    var navbar = document.querySelector(".navbar");
    navbar.classList.toggle('sticky', window.scrollY > 0);
});
