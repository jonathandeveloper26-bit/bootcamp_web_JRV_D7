var paragraphs = document.querySelectorAll('p');
let hoveredSet = new Set();


paragraphs.forEach( elem => {
    elem.addEventListener('mouseenter', () => elem.classList.add("blue"))
    elem.addEventListener('mouseleave', () => elem.classList.remove("blue"))

    elem.addEventListener('click', () => elem.classList.add("highlighted"))
});


