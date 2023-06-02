const scrollContainer = document.querySelector('.land-scroll-container');

const nxtBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');


nxtBtn.addEventListener('click', slideBuilding)
prevBtn.addEventListener('click', slideBuilding)

function slideBuilding(e){
    let buildingCardScrollWidth = document.querySelector('.building-cards').getBoundingClientRect().width;
    const scrollOffset = buildingCardScrollWidth * (e.currentTarget.classList.contains('nextBtn') ? 1 : -1);
    
    scrollContainer.scrollTo({
        left: scrollContainer.scrollLeft + scrollOffset,
        behavior: 'smooth', // Add smooth scrolling behavior
      });

      updateButtonState();
}

function updateButtonState() {
    const isScrollAtEnd = scrollContainer.scrollLeft === (scrollContainer.scrollWidth - scrollContainer.clientWidth);
    const isScrollAtBeginning = scrollContainer.scrollLeft === 0;
  
    if (isScrollAtEnd) {
      // Scroll container has scrolled to the end
      nxtBtn.disabled = true;
    } else {
      // Scroll container is not at the end
      nxtBtn.disabled = false;
    }
  
    if (isScrollAtBeginning) {
      // Scroll container is at the beginning
      prevBtn.disabled = true;
    } else {
      // Scroll container is not at the beginning
      prevBtn.disabled = false;
    }
  }
  
  
  
  
  
  
  