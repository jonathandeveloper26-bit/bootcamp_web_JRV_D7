var elem = document.querySelector('footer div');

var displayed_string = ""

document.addEventListener("keypress",function(event) {
    var pressed_key = event.key;

    displayed_string += pressed_key;
    if (displayed_string.length > 42) {
        displayed_string = displayed_string.slice(1);
    } 
    elem.textContent = displayed_string; 
});