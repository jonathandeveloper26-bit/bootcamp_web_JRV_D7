
let canvas = document.querySelectorAll('footer div');
canvas[0].draggable = true;

canvas[0].addEventListener('drag', function(event){
    var x_pos = event.clientX;
    var y_pos = event.clientY;
    console.log(x_pos + ", " + y_pos);
    canvas[1].textContent = `x:${x_pos} y:${y_pos}`;
})
