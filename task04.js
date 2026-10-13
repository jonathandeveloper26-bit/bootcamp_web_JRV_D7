
let buttons = document.querySelectorAll('footer div button');

let select = document.querySelector('footer div select');

let wrapper = document.querySelector('.wrapper');
;

function updateColor() {
    document.body.style.backgroundColor = select.value;
}
select.addEventListener('change', updateColor)

function updateFontIncrease() {
    var current_font_size = parseFloat(getComputedStyle(wrapper).fontSize);
    wrapper.style.fontSize = (current_font_size+1) + "px";
}

function updateFontDecrease() {
    var current_font_size = parseFloat(getComputedStyle(wrapper).fontSize);
    wrapper.style.fontSize = (current_font_size-1) + "px";
}
buttons[0].addEventListener('click',updateFontIncrease);
buttons[1].addEventListener('click',updateFontDecrease);

