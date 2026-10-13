var buttons = document.querySelectorAll("button");
var paragraphs = document.querySelectorAll("p");

buttons[0].addEventListener('click',function(event){
    paragraphs.forEach((paragraph) => {
        paragraph.style.display = "none";
    })
})