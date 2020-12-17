// var btn = document.querySelectorAll(".drum");
// for(var i=0;i<btn.length;i++)
//     btn[i].addEventListener('click',handleClick);

// function handleClick()
// {
//     var audio = new Audio('sounds/crash.mp3');
// audio.play();
// }
document.querySelector('.w').addEventListener('click',pressedW);
document.querySelector('.a').addEventListener('click',pressedA);
document.querySelector('.s').addEventListener('click',pressedS);
document.querySelector('.d').addEventListener('click',pressedD);
document.querySelector('.j').addEventListener('click',pressedJ);
document.querySelector('.k').addEventListener('click',pressedK);
document.querySelector('.l').addEventListener('click',pressedL);

function pressedW()
{
    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();
    document.querySelector('.w').classList.add('pressed');
    setTimeout(function(){
        document.querySelector('.w').classList.remove('pressed');
    },100);
    
}
function pressedA()
{
    var audio = new Audio('sounds/tom-2.mp3');
    
    audio.play();
    document.querySelector('.a').classList.add('pressed');
    setTimeout(function(){
        document.querySelector('.a').classList.remove('pressed');
    },100);
}
function pressedS()
{
    var audio = new Audio('sounds/tom-3.mp3');
    audio.play();
    document.querySelector('.s').classList.add('pressed');
    setTimeout(function(){
        document.querySelector('.s').classList.remove('pressed');
    },100);
}
function pressedD()
{
    var audio = new Audio('sounds/tom-4.mp3');
    audio.play();
    document.querySelector('.d').classList.add('pressed');
    setTimeout(function(){
        document.querySelector('.d').classList.remove('pressed');
    },100);
}
function pressedJ()
{
    var audio = new Audio('sounds/snare.mp3');
    audio.play();
    document.querySelector('.j').classList.add('pressed');
    setTimeout(function(){
        document.querySelector('.j').classList.remove('pressed');
    },100);
}
function pressedK()
{
    var audio = new Audio('sounds/crash.mp3');
    audio.play();
    document.querySelector('.k').classList.add('pressed');
    setTimeout(function(){
        document.querySelector('.k').classList.remove('pressed');
    },100);
}
function pressedL()
{
    var audio = new Audio('sounds/kick-bass.mp3');
    audio.play();
    document.querySelector('.l').classList.add('pressed');
    setTimeout(function(){
        document.querySelector('.l').classList.remove('pressed');
    },100);
}
document.addEventListener('keypress',(ev)=>hadleKey(ev));
function hadleKey(ev)
{
    const key = ev.key;
    if(key == 'W' || key=='w')pressedW();
    if(key == 'A' || key=='a')pressedA();
    if(key == 'S' || key=='s')pressedS();
    if(key == 'D' || key=='d')pressedD();
    if(key == 'J' || key=='j')pressedJ();
    if(key == 'K' || key=='k')pressedK();
    if(key == 'L' || key=='l')pressedL();
}


function blink(selector) {
    document.querySelector('.'+selector).fadeOut('slow', function() {
        $(this).fadeIn('slow', function() {
            blink(this);
        });
    });
}