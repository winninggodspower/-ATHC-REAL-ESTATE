const scrollContainer = document.querySelector('.testimonial-scroll-container');

const nxtBtn = document.querySelectorAll('.nextBtn');
const prevBtn = document.querySelectorAll('.prevBtn');


nxtBtn.forEach((btn, index) => {
    if (btn.parentElement.parentElement.parentElement.lastElementChild === btn.parentElement.parentElement){
        btn.classList += " invisible"
    }
    btn.addEventListener('click', slideTestimonial)
})

prevBtn.forEach((btn, index) => {
    if (btn.parentElement.parentElement.parentElement.firstElementChild === btn.parentElement.parentElement){
        btn.classList += " invisible"
    }
    btn.addEventListener('click', slideTestimonial)
})

function slideTestimonial(e){
    let testimonialWidth = scrollContainer.getBoundingClientRect().width;
    console.log(e.target.parentElement);

    if (e.target.classList.contains('nextBtn')) {
        console.log("next");
        scrollContainer.scrollLeft += testimonialWidth;
    }
    else{
        console.log("previous");
        scrollContainer.scrollLeft -= testimonialWidth;
    }
}