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