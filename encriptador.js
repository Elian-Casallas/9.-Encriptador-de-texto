var muneico = document.querySelector(".contenedorMuneico");
var contenedor = document.querySelector(".contenedorParrafo");
var resultado = document.querySelector(".texto-resultado");
var botonCopiar = document.querySelector(".contenedorCopiar");

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";
    for (var i = 0; i < texto.length; i++){
        if (texto[i] == "a"){
            textoFinal += "ai";
        } else if (texto[i] == "e"){
            textoFinal += "enter";
        } else if (texto[i] == "i"){
            textoFinal += "imes";
        } else if (texto[i] == "o"){
            textoFinal += "ober";
        } else if (texto[i] == "u"){
            textoFinal += "ufat";
        }else{
            textoFinal += texto[i];
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";
    for (var i = 0; i < texto.length; i++){
        if (texto[i] == "a"){
            textoFinal += "a";
            i += 1;
        } else if (texto[i] == "e"){
            textoFinal += "e";
            i += 4;
        } else if (texto[i] == "i"){
            textoFinal += "i";
            i += 3;
        } else if (texto[i] == "o"){
            textoFinal += "o";
            i += 3;
        } else if (texto[i] == "u"){
            textoFinal += "u";
            i += 3;
        }else{
            textoFinal += texto[i];
        }
    }
    return textoFinal;
}

function recuperarTexto(){
    var cajaTexto = document.querySelector(".cajaTexto");
    return cajaTexto.value;
}

function ocultarAdelante(){
    muneico.classList.add("ocultar");
    contenedor.classList.add("ocultar");
    botonCopiar.classList.add("mostrar");
}

function mostrarAdelante(contenido){
    var cajaTexto = document.querySelector(".cajaTexto");
    cajaTexto.value = "";
    contenido.textContent = "";
    muneico.classList.remove("ocultar");
    contenedor.classList.remove("ocultar");
    botonCopiar.classList.remove("mostrar");
}

function encriptar(){
    ocultarAdelante();
    var cajaTexto = recuperarTexto();
    resultado.textContent = encriptarTexto(cajaTexto);
}

function desencriptar(){
    ocultarAdelante();
    var cajaTexto = recuperarTexto();
    resultado.textContent = desencriptarTexto(cajaTexto);
}

function copiar(){
    var contenido = document.querySelector(".texto-resultado");
    navigator.clipboard.writeText(contenido.textContent.toString());
    mostrarAdelante(contenido);
}