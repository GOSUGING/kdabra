# Servidor Express para el Instituto Recreativo "Abracadabra"

Este es un servidor desarrollado con Express que sirve un sitio web estático con temática de magia para el Instituto Recreativo "Abracadabra". El servidor proporciona diversas rutas para interactuar con los usuarios y realizar diferentes acciones, como ver la lista de usuarios registrados, jugar a encontrar un conejo escondido y más.

## Requerimientos

- Node.js instalado en tu sistema.

## Instalación

1. Clona o descarga este repositorio en tu máquina local.
2. Abre una terminal en la carpeta del proyecto.
3. Ejecuta el siguiente comando para instalar las dependencias:

npm install

## Uso

1. Una vez que hayas instalado las dependencias, puedes iniciar el servidor ejecutando el siguiente comando:

npm start

2. El servidor se iniciará en el puerto 3000.

3. Abre un navegador web y visita `http://localhost:3000` para acceder al sitio web.

## Funcionalidades

El servidor proporciona las siguientes rutas:

- `/abracadabra/usuarios`: Devuelve un arreglo de nombres de usuarios registrados en formato JSON.
- `/abracadabra/juego/:usuario`: Permite jugar a encontrar un conejo escondido cuando se especifica un usuario registrado. Si el usuario no está registrado, se muestra una imagen de "Voldemort".
- `/abracadabra/conejo/:n`: Muestra la imagen de un conejo si el número especificado coincide con un número aleatorio generado por el servidor, de lo contrario, muestra la imagen de "Voldemort".

## Estructura del Proyecto

- `usuarios.mjs`: Contiene el arreglo de nombres de usuarios y se exporta para ser utilizado en el servidor.
- `middlewares.mjs`: Contiene los middlewares `validarUsuario` y `generarNumeroAleatorio`.
- `server.mjs`: El archivo principal que contiene el servidor Express y las rutas definidas.

## Contribuir

Si deseas contribuir a este proyecto, ¡eres bienvenido! Puedes abrir problemas para reportar errores o enviar solicitudes de extracción con mejoras.


