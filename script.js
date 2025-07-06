// Change the navbar style on scroll
window.onscroll = function() {
    var navbar = document.getElementById("navbar");
    if (window.pageYOffset > 50) {
        navbar.style.backgroundColor = "#444";
    } else {
        navbar.style.backgroundColor = "#333";
    }
};
