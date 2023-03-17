var drumSize = document.querySelectorAll(".drum").length;
var audios = [];
var pressAmount = 0;


for (var index = 0; index < drumSize; index++) {
    var keynum;
    document.querySelectorAll(".drum")[index].addEventListener("click", function ()
    {
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
    if(pressAmount > 10)
    {
        var audio = new Audio('sounds/troll.mp3');
        audio.play();
        pressAmount = 0;
    }
}


function exppr(expr)
{
    pressAmount++;
    switch (expr) 
    {
        case 'w': 
            var audio = new Audio('sounds/crash.mp3');
                audio.play();
                checkStrokes();
            break;
        case 'a':
            var audio = new Audio('sounds/kick-bass.mp3');
                audio.play();
                checkStrokes();
            break;
        case 's':
            var audio = new Audio('sounds/snare.mp3');
                audio.play();
                checkStrokes();
            break;
        case 'd':
            var audio = new Audio('sounds/tom-1.mp3');
                audio.play();
                checkStrokes();
            break;
        case 'j':
            var audio = new Audio('sounds/tom-2.mp3');
                audio.play();
                checkStrokes();
            break;
        case 'k':
            var audio = new Audio('sounds/tom-3.mp3');
                audio.play();
                checkStrokes();
            break;
        case 'l':
            var audio = new Audio('sounds/tom-4.mp3');
                audio.play();
                checkStrokes();
            break;
        default:
        console.log(`Sorry, we are out of ${expr}.`);
        break;
    }

}
  




