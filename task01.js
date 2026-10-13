var elem = document.querySelector('footer div');

var countClicks = 0;

elem.onclick = function() {
    countClicks++;
    elem.textContent = countClicks;
}
