let nombre= prompt ("ingresa tu usuario");
let contraseña = prompt ("ingresa tu contraseña")


let nombre1= "Eduardo";
let apellido = "Rodriguez"
let altura = "190";

let concatenacion = nombre1 + " " + apellido + " " + altura;
console.log(concatenacion);

if (altura >= 190) {
    console.log("eres una persona alta");
}else {
    console.log("eres una persona bajita");
};




for (i = 2000; i <=2022; i++){
    console.log("Contar años:" + i);
}

/*

//funcion tradicional 
function saludo (params) {
    //codigo a ejecutar
}
//funcion anonima 
const saludo1 = function name(params) {
    //codigo a ejecutar
}
//funcion flecha
const saludo2 = (param, param2) => {
    //codigo a ejecutar
}*/
/*
//objetos literal

const persona={
    nombre:"daniel", 
    apellido: "riv",
    edad: 39,
}
const persona1={
    nombre:"daniel", 
    apellido: "riv",
    edad: 39,
}
//acceder a los obnjetos de las personas(notacion de punto)
console.log(persona.apellido);
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona1);

//notacion de corchetes

console.log(persona1);

persona.nombre= "julian";
console.log(persona.nombre);

persona.direccion="leal 123";
console.log(persona);*/

//funcion constructora
/*
function Auto(ford, marca, anio, color){
    this.color = color;
    this.marca = marca;
    this.anio=anio;
    this.ford = ford
    this.arrancar=function(){
        console.log("estoy en marcha");
    }
    this.frenar = () =>{
        return"estoy detenio"
    }
 

}


const auto1 = new  Auto("negro", "ford", "2008", "chevrolet");

console.log(auto1);

/*let mensaje="hola como estas?";
console.log(mensaje);
console.log(mensaje.length);
//metodos (son accecibles cuando el metodo esta creado)
console.log(mensaje.toLowerCase());
console.log(mensaje.toUpperCase());

console.log()

auto1.arrancar()

console.log("marca" in auto1);

//iterador
for (const propiedad in auto1){
    console.log(propiedad+ " "+ auto1.propiedad );
}*/
