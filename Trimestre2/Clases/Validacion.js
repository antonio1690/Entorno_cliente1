window.onload = iniciar;
function iniciar() {
    document.getElementById("enviar").addEventListener("click", validar, false);
}

function validarNombre() {
    var elemento = document.getElementById("nombre");
    if (elemento.checkValidity()) {
        //error(element)
        if (elemento.Validity.valueMissing) {
            error2= (elemento,"No puedes dejar este campo vacio");
        }
        if (elemento.Validity.patternMissmatch) {
            error2=(elemento,'El nombre solo puede contener letras');
        }
    return false
    }
    return true;
}

function validarEdad() {
    var elemento = document.getElementById("edad");
    if (elemento.checkValidity()) {
        error(element);
        return false;
    }
    return true;
}

function validarTelefono() {
    var elemento = document.getElementById("telefono");
    if (elemento.checkValidity()) {
        error(element);
        return false;
    }
    return true;
}

function validar(e) {
    if (validarNombre() && validarEdad() && validarTelefono() && confirm ("¿está seguro/a?")) {
        return true;
    } else {
        e.preventDefault();
        return false;
    }
}

function error(elemento) {
    document.getElementById("mensajeError").innerHTML=elemento.validationMessage;
    elemento.className="error";
    elemento.focus();
}

function borrarError(){
    var formulario= document.forms(0);
    for (let i = 0; i < formulario.elements.length; i++) {
        formulario.elements[i].className= ""
        
    }
}

function error2(elemento,mensaje) {
    document.getElementById("mensajeError").innerHTML= mensaje;
}