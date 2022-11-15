let y = 0;
let x = 0;

let personaje = document.getElementById("personaje");

function movimiento(event){
    if(event.keyCode == "39"){
        x = x + 50;
        personaje.style.left = x + "px";
        document.getElementById("personaje").src = "imagen/d-rigth.png";
    }

    if(event.keyCode == "37"){
        x = x - 50;
        personaje.style.left = x + "px";
        document.getElementById("personaje").src = "imagen/d-left.png";
    }

    if(event.keyCode == "38"){
        y = y + 50;
        personaje.style.top = (-y) + "px";
        
    }

    if(event.keyCode == "40"){
        y = y - 50;
        personaje.style.top = (-y) + "px";
    }
}

window.onkeyup = movimiento