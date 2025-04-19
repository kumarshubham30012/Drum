let noOfDrumbButton= document.querySelectorAll(".drum").length;
for(let i =0;i<noOfDrumbButton;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        // alert("Wow")
    });
}

var buttons = document.getElementsByClassName('drum');


for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        var soundFile = this.getAttribute('data-sound'); 
        var sound = new Audio(soundFile);
        sound.play();
    });
}
