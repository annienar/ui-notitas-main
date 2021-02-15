const express = require ('express');
const app = express();
const notasRouter = require('./routers/notasRouter'); // requiero el module exports que disponibilicé con las rutas y declaro el prefijo que antepongo a la ruta, por ende en el enrutador no lo menciono
const path = require('path');

app.set('view engine', 'ejs'); // set the view engine to ejs
app.set('views', path.join(__dirname, '/views')); //decir la carpeta en la que están las vistas, no hace falta poner './'
app.use(express.static(path.join(__dirname, "../public"))); // disponibilizar la carpeta publica donde están los estilos y las imágenes, sin esto no carga el CSS
app.use('/', notasRouter); // cuando me llegue este prefijo, utilizo este enrutador

app.listen(3000, function() { 
    console.log("El Servidor está corriendo en el puerto 3000")
})

// Pasos
// 1.  crear app.js
// 2.  npm init -y
// 3.  npm express -install
// 4.  asegurarme que en package.json esté mirando app.js en la carpeta que corresponde
// 5.  nodemon
// 6.  comprobar con app.listen que esté todo corriendo bien
// 7.  crear el archivo con las rutas que voy a necesitar
// 8.  requerir en app.js y utilizar el router que acabo de crear (sincronización entre app y router.js)
// 9.  crear el controlador, donde voy a escribir las funciones para cada una de mis rutas
// 10. app.use en app.js donde disponibilizo la carpeta public
// 11. crear el archivo de mis vistas utilizando .ejs como motor de vistas
// 12. npm install ejs (requerir el modulo ejs )
// 13. set view engine as ejs
// 14. indicar en que carpeta estan las vistas asi no tengo que escribir la ruta completa
// 15. sequelize: 
        //a. npm install -g sequelize-cli (command line interface) - instala global -
        //b. npm install sequelize
        //c. npm install mysql2
        //d. sequelize init
// 16. 