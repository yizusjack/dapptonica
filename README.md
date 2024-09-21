## Instrucciones para clonar el repositorio
Una vez clonado, hacer uso de los siguientes comandos 
```
    composer install
    cp .env.example .env //configurar las variables de conexión a la DB
    php artian key:generate
    php artisan migrate
```
Eso hará que se instalen las dependencias de laravel, ahora para las de react se debe seguir el siguiente proceso.
```
    cd dapp //este es el proyecto de react
    npm install //hara la instalacion de las dependencias de react
    cp .env.example .env //si no tiene la URL donde correrá react hay que añadirla en el nuevo .env
    npm run dev //esto levantará el servidor donde corre el front-end de react, de aquí se debe acceder al proyecto.
```
## Documentación de la plantilla
https://www.creative-tim.com/learning-lab/react/input/material-kit/
