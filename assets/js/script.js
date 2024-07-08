/*
Requerimientos de encriptación

Las "llaves" de encriptación que utilizaremos son las siguientes:
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */

/* 
let textoErroneo = "3783UUUUú$#%";
let texto = "hola como estas";
let textoEncriptado = "hoberlai cobermober enterstais"; */

// Valida que un texto ingresado como parámetro contenga solo minúsculas y no esté vacío
function validarTexto(texto) {
    var regex = /^[a-z\s]*$/; // Expresión regular para validar solo letras minúsculas
    return regex.test(texto) && texto.trim !== '';
}

/*
console.log(validarTexto(texto)); // true
console.log(validarTexto(textoErroneo)); // false */

// Recibe texto y lo encripta
function encriptarTexto(texto) {
    
    let nuevoTexto = texto; // Nuevo texto

    // Reemplazos según las reglas dadas
    nuevoTexto = nuevoTexto.replace(/e/g, 'enter');
    nuevoTexto = nuevoTexto.replace(/i/g, 'imes');
    nuevoTexto = nuevoTexto.replace(/a/g, 'ai');
    nuevoTexto = nuevoTexto.replace(/o/g, 'ober');
    nuevoTexto = nuevoTexto.replace(/u/g, 'ufat');

    return nuevoTexto;
}

// Recibe texto y lo encripta
function desencriptarTexto(textoEncriptado) {
    let textoDesencriptado = textoEncriptado;

    // Proceso inverso de reemplazos
    textoDesencriptado = textoDesencriptado.replace(/enter/g, 'e');
    textoDesencriptado = textoDesencriptado.replace(/imes/g, 'i');
    textoDesencriptado = textoDesencriptado.replace(/ai/g, 'a');
    textoDesencriptado = textoDesencriptado.replace(/ober/g, 'o');
    textoDesencriptado = textoDesencriptado.replace(/ufat/g, 'u');

    return textoDesencriptado;
}

/*
console.log(encriptarTexto(texto)); // hoberlai cobermober enterstais
console.log(desencriptarTexto(textoEncriptado)); // hola como estas */


// Captura el texto y lo retorna encriptado
function capturarTextoEncriptar() {
    
    let textoCapturado = document.getElementById('texto').value;
    let textoValido = validarTexto(textoCapturado);
    let mensajeValidacion = document.getElementById('mensajeValidacion');
    let textoCapturadoEncriptado = '';
    
    // Si el texto es válido
    if (validarTexto(textoCapturado)) {
        // console.log(textoCapturado);
        textoCapturadoEncriptado = encriptarTexto(textoCapturado);
        // console.log(textoCapturadoEncriptado);
    } else {
        mensajeValidacion.style.color = 'red';
        // console.log('No es texto válido');
    }

    // Mensaje de validación aparece y desaparece según corresponda
    mensajeValidacion.style.display = textoValido ? 'none' : 'block';

    modificaSidebar(textoCapturadoEncriptado);
}

// Captura el texto y lo retorna desencriptado
function capturarTextoDesencriptar() {

    let textoCapturado = document.getElementById('texto').value;
    let textoValido = validarTexto(textoCapturado);
    let mensajeValidacion = document.getElementById('mensajeValidacion');
    let textoCapturadoDesencriptado = '';
    
    // Si el texto es válido
    if (validarTexto(textoCapturado)) {
        // console.log(textoCapturado);
        textoCapturadoDesencriptado = desencriptarTexto(textoCapturado);
        // console.log(textoCapturadoDesencriptado);
    } else {
        mensajeValidacion.style.color = 'red';
        // console.log('No es texto válido');
    }

    // Mensaje de validación aparece y desaparece según corresponda
    mensajeValidacion.style.display = textoValido ? 'none' : 'block';
    
    modificaSidebar(textoCapturadoDesencriptado);
}

// Agregar evento input al textarea para validar en tiempo real
document.getElementById('texto').addEventListener('input', capturarTextoEncriptar);

// Muestra el resultado en pantalla
function modificaSideBar(texto) {

    let textoProcesado = texto;
    let sidebarTitulo = document.getElementById('sidebarTitulo');
    let sidebarParrafo = document.getElementById('sidebarParrafo');

    if (textoProcesado !== '') {
        sidebarTitulo.style.display = 'none';
        sidebarParrafo.style.display = 'none';
    }

    return textoProcesado; // Retorna el texto para imprimir en pantalla
}

// Imprime en pantalla el resultado
function imprimirEnPantalla(texto) {
    
    let resultado = document.getElementById('sidebarProcesado');
    if (texto !== '') {
        resultado.innerHTML = texto;
    }
}



