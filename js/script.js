{
    const toggleBackground = () => {
        const bodyElement = document.querySelector(".js-body")
        let themeNameElement = document.querySelector(".js-themeName")
        
        bodyElement.classList.toggle("body--grey")
        themeNameElement.innerText = bodyElement.classList.contains("body--grey") ? "jasny motyw" : "ciemny motyw";
    };

    const init = () => {

        const themeButtonElement = document.querySelector(".js-themeButton")
        themeButtonElement.addEventListener("click", toggleBackground);
    }

    init();
}