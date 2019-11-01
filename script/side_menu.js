let sideMenu = $(".side-menu")

function menuHandler() {
    if (sideMenu.css("left") == "-500px") {
        sideMenu.css("z-index", 99)
        sideMenu.animate({
            opacity: 1,
            left: 0,
        }, 500)
    }
    else {
        
        sideMenu.animate({
            left: -500,
            opacity: 0,
        }, 500)
        sideMenu.css("z-index", 0)
    }

}