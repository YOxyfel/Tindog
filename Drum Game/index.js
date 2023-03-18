var drumSize = document.querySelectorAll(".drum").length;
var pressAmount = 0;

for (var index = 0; index < drumSize; index++) {
    
    document.querySelectorAll(".drum")[index].addEventListener("click", function (e)
    {
        
        lightUp(e.key);
        exppr(this.innerHTML);
    }
    );
}

document.addEventListener("keydown", function(event)
{
    exppr(event.key);
}
);

function checkStrokes() 
{
    if(pressAmount > 15)
    {
        var audio = new Audio('sounds/door.mp3');
        audio.play();
        pressAmount = 0;
    }
}

function keyAnimation(expr)
{
    var pressed = document.querySelector("." + expr).classList;
    pressed.toggle("pressed");

    setTimeout( function() {pressed.toggle("pressed"); }, 50);
}



function exppr(expr)
{
    pressAmount++;
    checkStrokes();
    keyAnimation(expr);

    switch (expr) 
    {
        case 'w': 
            var audio = new Audio('sounds/crash.mp3');
                audio.play();
            break;
        case 'a':
            var audio = new Audio('sounds/kick-bass.mp3');
                audio.play();
            break;
        case 's':
            var audio = new Audio('sounds/snare.mp3');
                audio.play();
            break;
        case 'd':
            var audio = new Audio('sounds/tom-1.mp3');
                audio.play();
            break;
        case 'j':
            var audio = new Audio('sounds/tom-2.mp3');
                audio.play();
            break;
        case 'k':
            var audio = new Audio('sounds/tom-3.mp3');
                audio.play();
            break;
        case 'l':
            var audio = new Audio('sounds/tom-4.mp3');
                audio.play();
            break;
        default:
        console.log(`Sorry, we are out of ${expr}.`);
        break;
    }
}
  




