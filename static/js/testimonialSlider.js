const scrollContainer = document.querySelector('.testimonial-scroll-container');

const nxtBtn = document.querySelectorAll('.nextBtn');
const prevBtn = document.querySelectorAll('.prevBtn');


nxtBtn.forEach((btn, index) => {
    if (btn.parentElement.parentElement.parentElement.lastElementChild === btn.parentElement.parentElement){
        btn.classList += " invisible"
    }
    btn.addEventListener('click', slideBuilding)
})

prevBtn.forEach((btn, index) => {
    if (btn.parentElement.parentElement.parentElement.firstElementChild === btn.parentElement.parentElement){
        btn.classList += " invisible"
    }
    btn.addEventListener('click', slideBuilding)
})


function slideBuilding(e){
    let testimonialWidth = scrollContainer.getBoundingClientRect().width;
    console.log(e.target.parentElement);

    const scrollOffset = testimonialWidth * (e.target.classList.contains('nextBtn') ? 1 : -1);

    scrollContainer.scrollTo({
        left: scrollContainer.scrollLeft + scrollOffset,
        behavior: 'smooth', // Add smooth scrolling behavior
    });
   
}