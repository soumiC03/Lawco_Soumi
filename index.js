// script for navbar toggle button starts here

function showSidebar() {

    const sidebar = document.querySelector('.nav-items2');
    sidebar.style.display = 'flex';
}

function hideSidebar() {
    const sidebar = document.querySelector('.nav-items2');
    sidebar.style.display = 'none';
}

// script for navbar toggle button ends here

// script for navbar scroll starts here
var stickynav = document.querySelector(".navbar");
window.addEventListener("scroll", () => {

  stickynav.classList.toggle("sticky", window.scrollY > 200);
});
// script for navbar scroll ends here