// Valida que un texto ingresado como parámetro contenga solo minúsculas y no esté vacío
function validarTexto(texto) {
    var regex = /^[a-z\s]*$/; // Expresión regular para validar solo letras minúsculas
    return regex.test(texto) && texto.trim !== '';
}

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

// Encripta el texto
function Encriptar() {
    
    let textoCapturado = document.getElementById('texto').value;
    let textoCapturadoEncriptado = '';
    
    // Si el texto es válido
    if (validarTexto(textoCapturado)) {
        textoCapturadoEncriptado = encriptarTexto(textoCapturado);
        imprimirEnPantalla(textoCapturadoEncriptado);
    }
}

// Desencripta el texto
function Desencriptar() {

    let textoCapturado = document.getElementById('texto').value;
    let textoCapturadoDesencriptado = '';
    
    // Si el texto es válido
    if (validarTexto(textoCapturado)) {
        textoCapturadoDesencriptado = desencriptarTexto(textoCapturado);
        imprimirEnPantalla(textoCapturadoDesencriptado);
    }
}

// Función que se ejecuta en tiempo real mientras se escribe en el textarea
function validarEnTiempoReal() {
    let textoCapturado = document.getElementById('texto').value;
    let textoValido = validarTexto(textoCapturado);
    let mensajeValidacion = document.getElementById('mensajeValidacion');
    let sidebarTitulo = document.getElementById('sidebarTitulo');
    let sidebarParrafo = document.getElementById('sidebarParrafo');

    // Desaparece o se modifica información en pantalla según corresponda
    mensajeValidacion.style.display = textoValido ? 'none' : 'block';
    mensajeValidacion.style.color = textoValido ? 'black' : 'red';
    sidebarTitulo.style.display = 'none';
    sidebarParrafo.style.display = 'none';
    sidebarImagen.style.display = 'none';
}

// Agregar evento input al textarea para validar en tiempo real
document.getElementById('texto').addEventListener('input', validarEnTiempoReal);

// Imprime en pantalla el resultado
function imprimirEnPantalla(texto) {
    
    let resultado = document.getElementById('sidebarProcesado');
    if (texto !== '') {
        resultado.innerHTML = texto;
    }
}
