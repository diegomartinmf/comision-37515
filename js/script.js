// Defino la variable nombre que será ingresada por el usuario
let nombre;

// Defino la variable apellido que será ingresada por el usuario
let apellido;

// Defino la variable auxiliar, x, como falsa inicialmente. Esta será utilizada en el ciclo while
let x = false;

// Inicio un ciclo do/while en el que se solicita el nombre de la persoa
do {
    // Solitito por prompt el nombre de la persona
    nombre = prompt('Escriba su nombre');
    // Si se hace clic en cancelar del prompt, la sección de pedir nombre se saltea
    if (nombre == null) {
        break;
        // Si el nombre es vacío, o sea acepto el prompt, pero sin texto, solicito vuelva a escribir pero no vacío
    } else if (nombre == "") {
        alert('Usted ha escrito un nombre vacío, por favor escríbalo correctamente');
        // Si el nombre no es vacío indico con alert el nombre, y solicito confirmación
    } else if (nombre != "") {
        x = confirm("Ha escrito el nombre: " + nombre + ", ¿es correcto");
        if (x == true) {
            // Si se confirma lo ingresado, sale mensaje de alerta con esto
            alert('Usted ha escrito su nombre correctamente y es: ' + nombre);
        } else {
            // En caso contrario, se indica que el nombre ha sido escrito incorrectamente
            nombre = null;
            alert('Usted ha escrito incorrectamente su nombre');
        }
    }
    // El ciclo continúa mientras el nombre esté vacío
} while ((nombre == ""));


// Idénticos comenetarios que para nombre, pero con apellido
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