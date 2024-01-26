const menuIcon = document.querySelector("#menu-icon")

const menuMobile = () => {
    const menuBurg = document.querySelector("#menu-burg")
    const menuContainer = document.querySelector("#menu-mobile")

    if(menuBurg.style.display == "block"){
        menuBurg.style.display = "none"
        menuContainer.style.paddingBottom = "0px"
    }else {
        menuBurg.style.display = "block"
        menuContainer.style.paddingBottom = "20px"
    }
}
menuIcon.addEventListener("click", menuMobile)