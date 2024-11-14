navContainer = document.getElementById("navContainer");
btnOpenNav = document.getElementById("btnOpenNav");
btnCloseNav = document.getElementById("btnCloseNav");

btnOpenNav.addEventListener("click", () => {
  toggleNav();
});

btnCloseNav.addEventListener("click", () => {
  toggleNav();
});

function toggleNav() {
  btnOpenNav.classList.toggle("hide");
  btnOpenNav.classList.toggle("show-flex");
  navContainer.classList.toggle("hide");
  navContainer.classList.toggle("show-flex");
}

addEventListener("resize", (e) => {
  if (window.innerWidth <= 768) {
    btnOpenNav.classList.remove("hide");
    btnOpenNav.classList.add("show-flex");
    navContainer.classList.remove("show-flex");
    navContainer.classList.add("hide");
  }
  else {
    btnOpenNav.classList.remove("show-flex");
    btnOpenNav.classList.add("hide");
    navContainer.classList.remove("hide");
    navContainer.classList.add("show-flex");
  }
});
