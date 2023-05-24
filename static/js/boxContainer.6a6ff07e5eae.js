
const boxContainers = document.querySelectorAll('.box-container');
const middleContainerParagraph = document.querySelector("#middle-pagagraph")
const middleContainerCallToAction = document.querySelector("#middle-cta")

boxContainers.forEach((boxContainer)=>{
    boxContainer.addEventListener('click', changeMiddleText)
})


function changeMiddleText(e){
    const boxContainer = e.currentTarget;
    middleContainerParagraph.innerHTML = boxContainer.dataset.paragraphText || "lorem ipsum text";
    middleContainerCallToAction.innerHTML = boxContainer.dataset.ctaText || "contact us";
}