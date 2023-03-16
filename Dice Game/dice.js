var randomNum = Math.floor(Math.random() * 6) + 1;
var randomNum2 = Math.floor(Math.random() * 6) + 1;

var imageNum = "images/dice" + randomNum + ".png";
var imageNum2 = "images/dice" + randomNum2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", imageNum);
document.querySelectorAll("img")[1].setAttribute("src", imageNum2);

if(randomNum > randomNum2)
{
    document.querySelector("h1").innerText = "Player One Wins 🚩";
}
else if(randomNum < randomNum2)
{
    document.querySelector("h1").innerText = "Player Two Wins 🚩";
}
else    
{
    document.querySelector("h1").innerText = "Draw";
}
