//let audio=document.createElement("AUDIO");
document.addEventListener("keydown", function (event){
    if(event.code==="KeyA"||event.code=="KeyS"||event.code=="KeyD"||event.code=="KeyF"||event.code=="KeyG"||event.code=="KeyH"||event.code=="KeyJ"
        ||event.code=="KeyW"||event.code=="KeyE"||event.code=="KeyT"||event.code=="KeyY"||event.code=="KeyU"

    ){
        console.log("The '"+ event.code.charAt(3)+"' key is pressed");
       // let audio= document.querySelector("AUDIO");
      let audio=new Audio("media/"+event.code.charAt(3)+".mp3");
      audio.play();
      let button = document.getElementById(event.code.charAt(3));
      button.animate([
          {
              opacity: .5,
          }
      ],
          {  duration: 200,
              iterations: 1});
    }
    else {
        console.warn("Wrong key");
    }
})