let noOfDrumbButton= document.querySelectorAll(".drum").length;
for(let i =0;i<noOfDrumbButton;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        // alert("Wow")
    });
}
// Get all buttons with class "play-sound"
var buttons = document.getElementsByClassName('drum');

// Loop through each button
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        var soundFile = this.getAttribute('data-sound'); // get sound path
        var sound = new Audio(soundFile); // create new audio
        sound.play(); // play the audio
    });
}
