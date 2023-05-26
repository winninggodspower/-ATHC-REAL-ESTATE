let landLayoutOpen = false;

document.querySelectorAll(".building-layout-btn").forEach((btn, index)=>{
    btn.addEventListener("click", open_land_layout)
})

document.querySelectorAll(".building-layout-close-icon").forEach((icon, index)=>{
    icon.addEventListener("click", close_land_layout)
})


function open_land_layout(e){
    // only open landlayout when another layout has not been open
    if (!landLayoutOpen) {
        const landLayoutId = `land-layout-${e.target.dataset.landId}`;
        document.getElementById(landLayoutId).style.display = "block";
        landLayoutOpen = true
    }
}


function close_land_layout(e){
    // only open landlayout when another layout has not been open
    if (landLayoutOpen) {
        const landLayoutId = `land-layout-${e.target.dataset.landId}`;
        document.getElementById(landLayoutId).style.display = "none";
        landLayoutOpen = false
    }
}