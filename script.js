
///////////////////////   CICLO "for"  //////////////////////////////////////////////////////////

//Creación de variable global
let nombreYApellido;


const finalizar =()=> alert("Tu lista ha sido recibida, " + nombre+ ". Recuerda presentar tu DNI nro: " + dni +  ". Feliz Cumpleaños!");

const ingresarDatos = ()=>{

let cantDePases= parseInt (prompt("Cuantos pases deseas? (Recuerda que el número máximo es 10)"));

//Estructura Condicional
if (cantDePases > 10 ) {
    
        alert("Lo siento, solo puedes pedir hasta 10 pases");
        ingresarDatos();
}

//Ciclo For
else{
    for(
        i=0; i < cantDePases; i++){
   
            let liNombre = document.getElementById('liNombre');
   
            nombreYApellido= prompt("Ingresá el nombre y apellido del invitado número " + (i+1));
    
            let name = document.createElement('li');
    
            name.textContent= nombreYApellido;
    
            liNombre.appendChild(name);
   
    
    }

    let btnFree = document.getElementById('btnFreePass');
    btnFree.remove('btnbtnFreePass');
    
    nombre = prompt("Ingresa tu nombre");
    dni= prompt("Ingresa tu DNI");



let btnSubmit = document.createElement('button');
let btn= document.getElementById('btnSub');
btnSubmit.textContent="Enviar mi lista";
btn.appendChild(btnSubmit);

} 
}

