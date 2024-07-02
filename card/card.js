function Clase() {
    //Seleccionar primer select
    let select = +document.getElementById("flores").value;
    //Seleccionar todas las cartas
    let cartas = document.getElementsByClassName("carta");
    //Eliminar o agregar cartas
    for (let cont = 0; cont < cartas.length; cont++) {
        if (cont < select) {
            cartas[cont].classList.remove("hidden")
        }
        else {
            cartas[cont].classList.add("hidden")
        }
    }
}
function tipos(){
    //Segundo select
    let select=document.getElementById("estaciones").value;
    let cartas = document.getElementsByClassName("carta");
    let primavera=document.getElementsByClassName("primavera");
    let otoño=document.getElementsByClassName("otoño");

if(select==="Primavera"){
    for(let cont=0;cont<primavera.length;cont++){
        primavera[cont].classList.remove("hidden");
    }
    for(let cont=0;cont<otoño.length;cont++){
        otoño[cont].classList.add("hidden")
    }
}
else{
    if(select==="Otoño"){
        for(let cont=0;cont<primavera.length;cont++){
            primavera[cont].classList.add("hidden");
        }
        for(let cont=0;cont<otoño.length;cont++){
            otoño[cont].classList.remove("hidden")
        }
    }
}



    
}

