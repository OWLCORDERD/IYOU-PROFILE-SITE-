let PEED_button = document.querySelector("#PEED-button");
let currentITEM = 3;

PEED_button.onclick = () =>{
  let boxes = [...document.querySelectorAll(".PEED_container .PEED_item")];
for(var i = currentITEM; i < currentITEM + 3; i++){
  boxes[i].style.display = 'inline-block';
}
currentITEM += 3;

if(currentITEM >= boxes.length){
    PEED_button.style.display = 'none';
}

}
