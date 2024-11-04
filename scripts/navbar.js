navContainer = document.getElementById("navContainer");
btnOpenNav = document.getElementById("btnOpenNav");
btnCloseNav = document.getElementById("btnCloseNav");

btnOpenNav.addEventListener("click", ()=>{
    btnOpenNav.style.display = "none";
    navContainer.style.display = "flex";
});

btnCloseNav.addEventListener("click", ()=>{
    btnOpenNav.style.display = "flex";
    navContainer.style.display = "none";
});

addEventListener("resize", (e) =>{
    if (window.innerWidth >= 440) {
        btnOpenNav.style.display = "none";
        navContainer.style.display = "flex";
    }
})