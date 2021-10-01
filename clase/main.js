// Estructura if
/* if (true) {
    console.log("vas a ver este mensaje");
}
 */
/* if (false) {
    console.log("no vas a ver est mensaje");
} */

// estructura if ejemplo semaforo

/* let semaforo = "verde"
 */
/* if (semaforo == "verde") {
    console.log("puede pasar");
}
 */
/* if (semaforo == "rojo") {
    console.log("no puede pasar");
} */

// ejemplo if else

/* let nombreUsuario = prompt("Ingresar nombre de usuario").toUpperCase()

if (nombreUsuario == "") {
   alert("No ingresaste el nombre de usuario");
}
else {
    alert("Nombre de usuario ingresado: " + nombreUsuario)
} */

// ejemplo if else if

/* let precio = 50


if (precio < 20) {
    alert("el precio es menor que 20")
}
else if (precio < 50) {
    alert("el precio es menor a 50")
}
else if (precio < 100) {
    alert("el precio es menor a 100")
}
 */

// true o false

//  let esValida = true
// let numero = 2
// let esMayor5 = (numero > 5)

// if (esMayor5) {
//     alert("Es boolean true")
// }else {
//     alert("No es mayor que: " + numero)
// }

// condiciones compuestas &&

// let nombreIngresado = prompt("Ingresar nombre")
// let apellidoIngresado = prompt("Ingresar apellido")

// if ((nombreIngresado != "") && (apellidoIngresado != "")) {
//     alert("Nombre: "+nombreIngresado +"\nApellido: "+apellidoIngresado)
// } else {
//     alert("Error: ingresar nombre y apellido")
// }

// condiciones compuestas ||

// let nombreIngresado = prompt("Ingresar nombre")

// if ((nombreIngresado == "ANA") || (nombreIngresado == "ana")) {
//     alert(" El nombre ingresado es Ana")
// } else{
//     alert("El nombre ingresado NO es Ana")
// }

// combinacion de && y ||

// let nombreIngresado = prompt("Ingresar nombre")

// if ((nombreIngresado != "") && ((nombreIngresado == "EMA") || (nombreIngresado == "ema"))) {
//     alert("Hola Ema")
// }else{
//     alert("Error: Ingresar nombre valido")
// }

// desafio

// let texto = prompt("Ingrese un texto")

// if (texto == "Hola") {
//     console.log("El texto ingresado es: " +texto);
// }else{
//     console.log("El ingresado es:  " +texto+ "es distinto a Hola");
// }

//pedir un numero y comprobar si esta ebtre 10 y 50 si es asi mostrar alerta

// let numero1 = parseInt(prompt("Ingrese un numero para comparar",0))
// let numero2 = parseInt(prompt("Ingrese el otro numero",0))

// if ((numero1 >= 10) && (numero2<= 50)){
//     alert("Los numeros ingresados estan entre 10 y 50 y son: "+numero1+" y "+numero2)
// }else{
//     alert("Los numeros ingresados no estan entre 10 y 50 y son: " +numero1+ " y "+numero2)
// }
