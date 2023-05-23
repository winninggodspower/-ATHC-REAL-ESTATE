const closeButtonUrl = "../static/img/icons/menu-close.svg";
const openButtonUrl = "../static/img/icons/menu-open.svg";

const navToggler = document.getElementById('nav-toggler');
const navLink = document.getElementById('nav-link');
navToggler.addEventListener('click', toggleNavBar)


function toggleNavBar(e){

    if(navToggler.dataset.state === "closed"){
    // change the img to close icon 
    // change the state to open
    navToggler.src = closeButtonUrl;
    navToggler.dataset.state = "open";
    }
    else{
    // change the img to open icon 
    // change the state to closed
    navToggler.src = openButtonUrl;
    navToggler.dataset.state = "closed";
    }
    navLink.classList.toggle("top-[48px]");

}