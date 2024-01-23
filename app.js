//aca estoy importando las cosas
const express = require('express');
const path = require ("path") ;

// aca cree expres
const app = express();


// aca esta el root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });

//el 404
app.get('*', (req, res) => {
    res.status(404).send("404 - Not Found");
  });
//
const port = process.env.port || 3000;
app.listen (port, () => console.log ("servidor andando"));

//los parametros de la funcion son un callback

app.get ("/", function (req, res) {
    res.send ("llegaste al sitio2")
});