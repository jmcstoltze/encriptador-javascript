# Encriptador de Texto

Este proyecto es una aplicación web sencilla que permite encriptar y desencriptar texto basado en ciertas reglas. Además, valida que el texto ingresado contenga solo letras minúsculas y espacios.

Puedes acceder a la aplicación en este [enlace](https://encriptador-javascript-zeta.vercel.app/).

## Funcionalidades

- Encriptar texto: Transforma un texto según las siguientes reglas:
  - La letra "e" se convierte en "enter"
  - La letra "i" se convierte en "imes"
  - La letra "a" se convierte en "ai"
  - La letra "o" se convierte en "ober"
  - La letra "u" se convierte en "ufat"
  
- Desencriptar texto: Revierten las reglas de encriptación mencionadas.

- Validación en tiempo real: Mientras se escribe en el campo de texto, se verifica que el texto solo contenga letras minúsculas y espacios.

## Requisitos

Para ejecutar el proyecto, necesitas un navegador web moderno. No se requiere configuración adicional.

## Estructura del Proyecto

```plaintext
.
├── assets
│   ├── css
│   │   └── styles.css
│   ├── img
│   │   ├── favicon.png
│   │   └── searching.jpg
│   └── js
│       └── script.js
├── index.html
└── README.md
```

- `index.html`: Contiene la estructura principal de la aplicación.
- `assets/css/styles.css`: Contiene los estilos CSS.
- `assets/img/`: Contiene las imágenes usadas en la aplicación.
- `assets/js/script.js`: Contiene la lógica JavaScript para la encriptación, desencriptación y validación de texto.

## Configuración y Uso

1. Clona el repositorio en tu máquina local.

    ```bash
    git clone <URL_DEL_REPOSITORIO>
    ```

2. Navega hasta el directorio del proyecto.

    ```bash
    cd <NOMBRE_DEL_DIRECTORIO>
    ```

3. Abre el archivo `index.html` en tu navegador web.

    ```bash
    open index.html
    ```

## Descripción del Código

### HTML

El archivo `index.html` contiene la estructura básica de la aplicación, incluyendo el campo de texto, botones y un área para mostrar resultados.

### CSS

El archivo `styles.css` contiene estilos básicos para la apariencia de la aplicación.

### JavaScript

El archivo `script.js` contiene la lógica principal:

- **Validación de Texto**: La función `validarTexto(texto)` verifica que el texto ingresado contenga solo letras minúsculas y espacios.
- **Encriptar Texto**: La función `encriptarTexto(texto)` aplica las reglas de encriptación al texto ingresado.
- **Desencriptar Texto**: La función `desencriptarTexto(textoEncriptado)` revierte las reglas de encriptación.
- **Validación en Tiempo Real**: La función `validarEnTiempoReal()` valida el texto mientras se escribe en el campo de texto.
- **Captura y Procesamiento del Texto**: Las funciones `Encriptar()` y `Desencriptar()` capturan el texto ingresado, lo validan y lo encriptan/desencriptan según corresponda.
- **Mostrar Resultados**: La función `imprimirEnPantalla(texto)` muestra el texto procesado en el área de resultados.

## Contribuciones

Si deseas contribuir a este proyecto, por favor, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama nueva (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commits (`git commit -am 'Añadir nueva funcionalidad'`).
4. Sube tus cambios (`git push origin feature/nueva-funcionalidad`).
5. Crea un Pull Request.

## Autor

Jose Contreras Stoltze
