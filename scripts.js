const openMenu = document.querySelector(".open-menu")
const closeMenu = document.querySelector(".close-menu")
const header = document.querySelector("header")
const main = document.querySelector("main")
const section = document.querySelector("section")

openMenu.addEventListener('click', function() {
    header.classList.add("hide")
    main.classList.add("hide")
    section.classList.remove("hide")

    window.addEventListener("resize", function() {
        if(window.matchMedia("(min-width: 481px)").matches) {
            header.classList.remove("hide")
            main.classList.remove("hide")
            section.classList.add("hide")
        }
      })
})


closeMenu.addEventListener('click', function() {
    header.classList.remove("hide")
    main.classList.remove("hide")
    section.classList.add("hide")
}) 