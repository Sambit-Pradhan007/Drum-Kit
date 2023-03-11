var numberodDrums=document.querySelectorAll(".drum");
for(let i=0; i<numberodDrums.length; i++){
   document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var button=this.innerHTML;
    playsound(button);
    buttonAnimation(button);
   })
}
document.addEventListener("keypress", function(event){
    playsound(event.key);
    buttonAnimation(event.key);
});
function playsound(button){
    switch (button) {
        case "w":
          var tom1 = new Audio("sounds/tom-1.mp3");
          tom1.play();
          break;
    
        case "a":
          var tom2 = new Audio("sounds/tom-2.mp3");
          tom2.play();
          break;
    
        case "s":
          var tom3 = new Audio('sounds/tom-3.mp3');
          tom3.play();
          break;
    
        case "d":
          var tom4 = new Audio('sounds/tom-4.mp3');
          tom4.play();
          break;
    
        case "j":
          var snare = new Audio('sounds/snare.mp3');
          snare.play();
          break;
    
        case "k":
          var crash = new Audio('sounds/crash.mp3');
          crash.play();
          break;
    
        case "l":
          var kick = new Audio('sounds/kick-bass.mp3');
          kick.play();
          break;
    
    
        default: console.log(key);
    
      }
}
function buttonAnimation(currkey){
var activeButton=document.querySelector("."+currkey);
activeButton.classList.add("pressed");

setTimeout(()=>{
    activeButton.classList.remove("pressed"); 
},100);
}