const list = document.querySelector(".list")
const buttonMenu = document.querySelector(".img-menu")
const buttonMenuClose = document.querySelector(".img-menu-close")

const actvie = (button)=> button.addEventListener("click", ()=> list.classList.toggle("active") )

actvie(buttonMenu)
actvie(buttonMenuClose)