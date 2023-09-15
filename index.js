alert("Welcome to the site, Hope you like it !!!");




for(var i=0; i<document.querySelectorAll(".drum").length; i++){

document.querySelectorAll(".drum")[i].addEventListener("click", function(){

    keyIdentifier(this.innerHTML);

    buttonAnimation(this.innerHTML);
});
  
}
 

document.addEventListener("keypress",function(event){
    keyIdentifier(event.key);

    buttonAnimation(event.key);
      });



      function keyIdentifier(key){

        // key.style.color="black";
        switch (key) {
          case "w": 
            var crash = new Audio("sounds/crash.mp3");
          crash.play();
            break;
        
            case "a": 
            var kickbass = new Audio("sounds/kick-bass.mp3");
          kickbass.play();
            break;
        
            case "s": 
            var snare = new Audio("sounds/snare.mp3");
          snare.play();
            break;
        
            case "d": 
            var tom1 = new Audio("sounds/tom-1.mp3");
           tom1.play();
            break;
        
        
            case "j": 
            var tom2 = new Audio("sounds/tom-2.mp3");
           tom2.play();
            break;
        
        
            case "k": 
            var tom3 = new Audio("sounds/tom-3.mp3");
           tom3.play();
            break;
        
        
            case "l": 
            var tom4 = new Audio("sounds/tom-4.mp3");
             tom4.play();
            break;
        
        
        
          default:
            break;
        }
      }


      function buttonAnimation(mkey){

           document.querySelector("." + mkey).classList.add("pressed");

           setTimeout(function(){
            document.querySelector("." + mkey).classList.remove("pressed");
           },100);

      }