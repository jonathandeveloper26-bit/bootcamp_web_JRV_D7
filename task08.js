var elems = document.querySelectorAll('a');

elems.forEach((elem) => {
    if (elem.target != "_blank") {
        elem.style.opacity = "0.5";
    }
})