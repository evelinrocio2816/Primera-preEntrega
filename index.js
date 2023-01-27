//PEDIMOS O SOLICITAMOS LA EDAD A EL CLIENTE ANTES DE COMPRAR!!

let usuario=prompt("Ingrese su nombre");
let edad=18; 
let edadUsuario= parseInt(prompt(" Ingrese su edad"));
if( edadUsuario >= 18){
    alert("Bienvenido:"+ usuario +"\nPuede realizar su Compra")

}else{
    alert("Usted es menor de edad,  no puede realizar esta compra");



}


let Compras = prompt ("Que necesitas?");
while(Compras != ""){
    switch (Compras){
        case"fernet":
        alert("usted desea comprar un fernet?");
        break;
        case ("Coca-cola")||("Coca cola"):
         alert("usted desea comprar coca-cola?");
         break;
        case"Gin":
        alert("usted desea un Gin?");
        break;
        default:
         alert("no tenemos en stock lo que necesita comprar");
            break;
            
}
    console.log(Compras);
    Compras= prompt("¿Algo mas?");
}
function calcularIva(numero){
    return numero* 0.21;
}
const numero = parseInt(prompt("ingrese su monto aproximado"));
const resultado=calcularIva(numero);
console.log("Su descuento del 21% es: "+" "+"$"+resultado + "\n"+"Gracias por su compra");
alert("Su descuento del 21% es: "+" "+"$"+resultado + "\n"+"Gracias por su compra");
