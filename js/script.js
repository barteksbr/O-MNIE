let bodyElement = document.querySelector(".js-body")
let themeButtonElement = document.querySelector(".js-themeButton")
let themeNameElement = document.querySelector(".js-themeName")


themeButtonElement.addEventListener("click", () => {
    bodyElement.classList.toggle("body--grey")

    themeNameElement.innerText = bodyElement.classList.contains("body--grey") ? "jasny motyw" : "ciemny motyw";

})