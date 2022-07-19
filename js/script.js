let nombre;
let apellido;
let edad;
let x = false;

do {
    nombre = prompt('Escriba su nombre');
    if (nombre == null) {
        break;
    } else if (nombre == "") {
        alert('Usted ha escrito un nombre vacío, por favor escríbalo correctamente');
    } else if (nombre != "") {
        x = confirm("Ha escrito el nombre: " + nombre + ", ¿es correcto");
        if (x == true) {
            alert('Usted ha escrito su nombre correctamente y es: ' + nombre);
        } else {
            nombre = null;
            alert('Usted ha escrito incorrectamente su nombre');
        }
    }
} while ((nombre == ""));

do {
    apellido = prompt('Escriba su apellido');
    if (apellido == null) {
        break;
    } else if (apellido == "") {
        alert('Usted ha escrito un apellido vacío, por favor escríbalo correctamente');
    } else if (apellido != "") {
        x = confirm("Ha escrito el apellido: " + apellido + ", ¿es correcto");
        if (x == true) {
            alert('Usted ha escrito su apellido correctamente y es: ' + apellido);
        } else {
            apellido = null;
            alert('Usted ha escrito incorrectamente su apellido');
        }
    }
} while ((apellido == ""));

let nombrecompleto;

if ((nombre != null) && (apellido != null)) {
    nombrecompleto = "A"
} else if ((nombre != null) && (apellido == null)) {
    nombrecompleto = "B"
} else if ((nombre == null) && (apellido != null)) {
    nombrecompleto = "C"
} else { nombrecompleto = "D" }


switch (nombrecompleto) {
    case "A":
        alert("Su nombre completo es: " + nombre + " " + apellido);
        break;

    case "B":
        alert("Solo puso nombre: " + nombre);
        break;

    case "C":
        alert("Solo puso apellido: " + apellido);
        break;

    case "D":
        alert("No puso ni nombre ni apellido");
        break;
}