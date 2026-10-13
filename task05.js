
let canvas = document.querySelector('footer div canvas');

const audio = new Audio("https://universal-soundbank.com/sounds/13631.mp3")

let buttons = document.querySelectorAll('footer div button');

const ctx = canvas.getContext('2d');

function drawPlayCanvas() {
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.moveTo(6,6);
    ctx.lineTo(14,10);
    ctx.lineTo(6,14);
    ctx.closePath();
    ctx.strokeStyle = "red";
    ctx.fill();
    ctx.stroke();
    canvas.style.border = '1px solid white';
}

canvas.addEventListener('click',function(){
    audio.play().catch(function(err){
        console.error("Audio Refused to Play: "+err)
    });
})

buttons[0].addEventListener('click', function(){
    audio.pause();
})

buttons[1].addEventListener('click',function(){
    audio.pause();
    audio.currentTime=0;
})

drawPlayCanvas();